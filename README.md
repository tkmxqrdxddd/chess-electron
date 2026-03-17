# Chess-Electron

A desktop application for [Chess.com](https://www.chess.com) built with Electron.

## Features

- Play Chess.com in a dedicated desktop window
- Native desktop experience with web convenience
- Linux, Windows, and macOS support
- Customizable window size (1200x800 default)

## Installation

### Arch Linux

Using the PKGBUILD:
```bash
cd chess-electron
makepkg -si
```

### Other Linux Distributions

Download the appropriate package from the [releases](https://github.com/tkmxqrdxddd/chess-electron/releases) page:
- `.AppImage` - Universal Linux package
- `.deb` - Debian/Ubuntu based distributions
- `.rpm` - Fedora/openSUSE based distributions

### Windows

Download and run the Windows installer from the [releases](https://github.com/tkmxqrdxddd/chess-electron/releases) page.

### macOS

Download the `.dmg` file from the [releases](https://github.com/tkmxqrdxddd/chess-electron/releases) page.

## Development

### Prerequisites

- Node.js (v18 or higher)
- npm

### Setup

```bash
# Clone the repository
git clone https://github.com/tkmxqrdxddd/chess-electron.git
cd chess-electron

# Install dependencies
npm install
```

### Running the App

```bash
npm start
```

### Building

```bash
# Build for current platform
npm run dist

# Build unpacked directory (for testing)
npm run pack
```

## Configuration

You can modify the window size in `main.js`:
```javascript
const win = new BrowserWindow({
  width: 1200,
  height: 800,
  // ...
})
```

To enable DevTools by default, uncomment the line:
```javascript
win.webContents.openDevTools()
```

## License

ISC

## Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.
