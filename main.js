const {app, BrowserWindow, Menu} = require('electron');
let mainWindow;
let menuTemplate = [
    {
        label: "Window Manager",
        submenu: [
            { label: "create New" }
        ]
    },
    {
      label : "View",
            submenu : [
        { role : "reload" },
        { label : "custom reload" }
        ]
    }
];
function appInit () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600,icon: __dirname + '/assets/icon512.png'})

  // and load the main.html of the app.
  mainWindow.loadFile('index.html')

    let menu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(menu);
}
app.on('ready', () => {
  appInit();
})