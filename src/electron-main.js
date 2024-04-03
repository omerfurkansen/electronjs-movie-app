const { app, BrowserWindow, globalShortcut, Menu } = require('electron');
const path = require('path');
const url = require('url');

const isMac = process.platform === 'darwin';
const isDev = process.env.NODE_ENV === 'development';

const template = [
  ...(isMac
    ? [{
        label: app.name,
        submenu: [
          { role: 'about' },
          { type: 'separator' },
          { role: 'services' },
          { type: 'separator' },
          { role: 'hide' },
          { role: 'hideOthers' },
          { role: 'unhide' },
          { type: 'separator' },
          { role: 'quit' },
        ]
      }]
    : []),
  ...(isDev 
    ? [{
        label: 'View',
        submenu: [
          { role: 'toggleDevTools' },
        ]
      }] 
    : []),
  {
    label: 'File',
    submenu: [
      isMac ? { role: 'close' } : { role: 'quit' }
    ]
  },
];

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : url.format({
          pathname: path.join(__dirname, '../build/index.html'),
          protocol: 'file:',
          slashes: true,
        })
  );

  mainWindow.on('closed', () => {
    app.quit();
  });
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

// Disable refresh outside of development env for Windows, macOS, and Linux
// We can disable other shortcuts as well
app.on('browser-window-focus', () => {
  if (!isDev) {
    globalShortcut.register('CommandOrControl+R', () => {});
    globalShortcut.register('CommandOrControl+Shift+R', () => {});
    globalShortcut.register('F5', () => {});  
  }
});

app.on('browser-window-blur', () => {
  globalShortcut.unregister('CommandOrControl+R');
  globalShortcut.unregister('CommandOrControl+Shift+R');
  globalShortcut.unregister('F5');
});
