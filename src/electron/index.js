// Electron Elements
const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipcMain = electron.ipcMain;

//Utilities
const contextMenu = require('electron-context-menu');
const Store = require('electron-store');
const path = require("path");
const os = require('os');
const isDev = require("electron-is-dev");

//Pack Data
const baseConfig = require('../json/structure');
const store = new Store();
let mainWindow;


if(store.get('version') !== baseConfig.version){
    store.clear();
    store.set(baseConfig);
}


contextMenu({
    prepend: (params, browserWindow) => {

        console.log(' k k k k k ', params, browserWindow);
        return [{
            label: 'Rainbow',
            // Only show it when right-clicking images
            visible: params.mediaType === 'div'
        }]
    },
    showInspectElement: true
});

function createWindow() {
    BrowserWindow.addDevToolsExtension(
        path.join(os.homedir(), '/Library/Application Support/Google/Chrome/Default/Extensions/lmhkpmbekcpmknklioeibfkpmmfibljd/2.17.0_0')
    );

    mainWindow = new BrowserWindow({
        width: 1150,
        height: 780,
        webPreferences: {
            nodeIntegration: true
        },
        titleBarStyle: 'hidden'
    });
    mainWindow.loadURL(`file://${path.join(__dirname, "../../../build/index.html")}`);
    mainWindow.on("closed", () => {
        mainWindow = null
    });
    mainWindow.store = {
        setConfiguration: (key, val) => {
            if(!!val && !!key){
                store.set(`configuration.${key}`, val);
                return val;
            }
            return false;
        },
        setProfiles: profiles => {
            if(profiles instanceof Array){
                store.set('profiles',profiles);
                return profiles;
            }
            return false;
        },
        setEnvironmentsConfiguration: (key, val) => {
            if(!!val && !!key){
                store.set(`environments.structure.${key}`, val);
                return val;
            }
            return false;
        },
        setEnvironments: environments => {
            if(environments instanceof Array){
                store.set('environments.elements',environments);
                return environments;
            }
            return false;
        },
    };
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
});

ipcMain.on('sayMessage',  (event, elements, ...rest) =>{
    console.log('YEAHH!!', event, elements, rest);
    /*publish(...elements).then(data => {
       console.log(data);
    });*/
});

ipcMain.on('setStore',  (event, elem, value) =>{
    console.log('H E R E', app.getPath('userData'));
    store.set(elem, value);
    /*publish(...elements).then(data => {
       console.log(data);
    });*/
});