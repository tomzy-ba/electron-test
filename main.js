const path = require("path");
const { app, BrowserWindow } = require("electron");

function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title: "YT",
        width: 500,
        height: 600
    });

    mainWindow.loadFile();
}