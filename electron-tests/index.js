import { app, BrowserWindow } from 'electron';

let mainWindow;

app.on('ready', _ => {
    mainWindow = new BrowserWindow({
    width: 400,
    height: 100
  });

  mainWindow.loadURL(`file://${__dirname}/index.html`);

  mainWindow.on('close', _ => {
    mainWindow = null;
  });
})
