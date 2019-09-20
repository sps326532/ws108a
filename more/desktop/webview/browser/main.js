const {app, BrowserWindow} = require('electron');

let mainWindow;

// process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

app.on('window-all-closed', function() {
  app.quit();
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({
    width: 1024, height: 768,
    webPreferences: {
      nodeIntegration: false,
      preload: './preload.js'
    }
  })
  mainWindow.loadURL('./browser.html');
  mainWindow.openDevTools();
});
