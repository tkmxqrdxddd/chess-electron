{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  name = "chess-electron-dev";
  
  buildInputs = with pkgs; [
    nodejs_22
    npm
    electron_35
    libsecret
    gnome-keyring
    fakeroot
    dpkg
    rpm
    appimagekit
    imagemagick
    icoutils
  ];

  shellHook = ''
    export npm_config_build_from_source=true
    echo "Chess-Electron Development Environment"
    echo "Node.js: $(node --version)"
    echo "npm: $(npm --version)"
    echo ""
    echo "Commands:"
    echo "  npm install    - Install dependencies"
    echo "  npm start      - Run the app"
    echo "  npm run dist   - Build distributable packages"
    echo "  npm run lint   - Run ESLint"
  '';
}
