# Maintainer: Jan Fidra <tkmxqrd@gmail.com>
pkgname=chess-electron
pkgver=1.0.0
pkgrel=1
pkgdesc="Chess.com desktop app"
arch=('x86_64')
url="https://github.com/tkmxqrdxddd/chess-electron"
license=('ISC')
depends=('electron')
makedepends=('npm' 'nodejs')
source=("$pkgname-$pkgver.tar.gz::$url/archive/v$pkgver.tar.gz")
sha256sums=('SKIP')

build() {
  cd "$srcdir/$pkgname-$pkgver"
  npm install
  npm run dist
}

package() {
  cd "$srcdir/$pkgname-$pkgver"
  
  # Create necessary directories
  install -d "$pkgdir/usr/lib/$pkgname"
  install -d "$pkgdir/usr/bin"
  install -d "$pkgdir/usr/share/applications"

  # Copy application files
  cp -r dist/linux-unpacked/* "$pkgdir/usr/lib/$pkgname/"

  # Create launcher script
  echo '#!/bin/sh' > "$pkgdir/usr/bin/$pkgname"
  echo "electron /usr/lib/$pkgname/resources/app.asar" >> "$pkgdir/usr/bin/$pkgname"
  chmod 755 "$pkgdir/usr/bin/$pkgname"

  # Create .desktop file
  echo "[Desktop Entry]
Name=Chess.com Desktop
Exec=$pkgname
Icon=/usr/lib/$pkgname/resources/app.asar.unpacked/assets/icon.png
Type=Application
Categories=Game;" > "$pkgdir/usr/share/applications/$pkgname.desktop"
}