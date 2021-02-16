const {
  app,
  BrowserWindow
} = require('electron');
const path = require('path');

if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    title: 'Youtube on PC',
    width: 1600,
    height: 900,
    frame: false,
    fullscreen: true,
    fullscreenable: true,
    icon: `${__dirname}./app.ico`
  });

  mainWindow.webContents.setUserAgent("Mozilla/5.0 (Linux; Tizen 2.3) AppleWebKit/538.1 (KHTML, like Gecko)Version/2.3 TV Safari/538.1");
  mainWindow.loadURL('https://youtube.com/tv')

};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});