const { app, BrowserWindow, session } = require('electron')
const path = require('path')
const { URL } = require('url')

function createWindow () {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true
    },
    icon: path.join(__dirname, 'favicon.ico')
  })

  // Load Chess.com
  win.loadURL('https://www.chess.com')

  // Apply Content Security Policy
  session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
    callback({
      responseHeaders: {
        ...details.responseHeaders,
        'Content-Security-Policy': ["default-src 'self' https: 'unsafe-inline' 'unsafe-eval'"]
      }
    })
  })

  // Prevent navigation to external URLs
  win.webContents.on('will-navigate', (event, url) => {
    const allowedHosts = ['www.chess.com', 'chess.com']
    try {
      const parsedUrl = new URL(url)
      if (!allowedHosts.includes(parsedUrl.hostname)) {
        event.preventDefault()
      }
    } catch (e) {
      event.preventDefault()
    }
  })

  // Prevent creating new windows
  win.webContents.setWindowOpenHandler(({ url }) => {
    const allowedHosts = ['www.chess.com', 'chess.com']
    try {
      const parsedUrl = new URL(url)
      if (allowedHosts.includes(parsedUrl.hostname)) {
        win.loadURL(url)
      }
    } catch (e) {
      // Invalid URL, deny by default
    }
    return { action: 'deny' }
  })

  // Uncomment the following line to open DevTools by default
  // win.webContents.openDevTools()
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
