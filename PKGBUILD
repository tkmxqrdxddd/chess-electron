# Maintainer: Jan Fidra <tkmxqrd@gmail.com>
pkgname=chess-electron
pkgver=2.0.0
pkgrel=1
pkgdesc="Chess.com desktop app"
arch=('x86_64')
url="https://github.com/tkmxqrdxddd/chess-electron"
license=('ISC')
depends=('electron')
source=("favicon.ico")
md5sums=('SKIP')

package() {
    # Create directories
    mkdir -p "$pkgdir/usr/lib/$pkgname"
    mkdir -p "$pkgdir/usr/bin"
    mkdir -p "$pkgdir/usr/share/applications"
    mkdir -p "$pkgdir/usr/share/icons/hicolor/256x256/apps"

    # Copy application files
    cp -r "$srcdir/main.js" "$pkgdir/usr/lib/$pkgname/"
    cp -r "$srcdir/package.json" "$pkgdir/usr/lib/$pkgname/"

    # Copy and convert favicon
    cp "$srcdir/favicon.ico" "$pkgdir/usr/lib/$pkgname/"
    convert "$srcdir/favicon.ico" -thumbnail 256x256 -alpha on -background none -flatten "$pkgdir/usr/share/icons/hicolor/256x256/apps/$pkgname.png"

    # Create launcher script
    cat > "$pkgdir/usr/bin/$pkgname" << 'EOF'
#!/bin/sh
cd /usr/lib/chess-electron
exec electron .
EOF
    chmod +x "$pkgdir/usr/bin/$pkgname"

    # Create .desktop file
    cat > "$pkgdir/usr/share/applications/$pkgname.desktop" << EOF
[Desktop Entry]
Name=Chess.com Desktop
Exec=$pkgname
Icon=$pkgname
Type=Application
Categories=Game;
EOF
}
