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
  install -d "$pkgdir/usr/lib/$pkgname"
  cp -r dist/linux-unpacked/* "$pkgdir/usr/lib/$pkgname/"
  install -Dm644 "$srcdir/$pkgname-$pkgver/chess-electron.desktop" "$pkgdir/usr/share/applications/chess-electron.desktop"
  
  # Add a binary to /usr/bin
  install -Dm755 /dev/null "$pkgdir/usr/bin/$pkgname"
  echo '#!/bin/sh' > "$pkgdir/usr/bin/$pkgname"
  echo "exec electron /usr/lib/$pkgname/resources/app.asar" >> "$pkgdir/usr/bin/$pkgname"
}