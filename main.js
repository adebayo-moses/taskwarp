// modules to control application life and native BrowserWindow
const path = require("node:path");
const { app, BrowserWindow } = require("electron");
const electronReload = require("electron-reload");
electronReload(__dirname);

function createWindow() {
  const mainWindow = new BrowserWindow({
    title: "Task Warp",
    width: 500,
    height: 600,
  });

  mainWindow.loadFile(path.join(__dirname, "./renderer/index.html"));
  //  open devtools
  mainWindow.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});
