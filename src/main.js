const electron = require('electron')
// require('electron-reload')(__dirname)
const path = require('path')
const BrowserWindow = electron.BrowserWindow
const ipcMain = electron.ipcMain
const app = electron.app
const isDev = require('electron-is-dev')
const file = require('./helperfunctions/filefunctions')
const channel = require('./channels').channels
const getHaiku = require('./helperfunctions/api-call').getHaiku

let mainWindow

app.on('ready', () => {
   mainWindow = new BrowserWindow({
      height: 1000,
      width: 600,
      webPreferences: {
         preload: path.join(__dirname, 'preload.js'),
      },
      // resizable: false,
   })

   mainWindow.loadURL(
      isDev
         ? 'http://localhost:3000'
         : `file://${path.join(__dirname, '../build/index.html')}`
   )

   mainWindow.webContents.openDevTools()

   mainWindow.on('close', () => {
      console.log('Closing...')
      mainWindow = null
   })
})

ipcMain.on(channel.MAKE_HAIKU, (evt, source, data) => {
   console.log(source)

   if (source === 'radiobutton') {
   } else if (source === 'textinput') {
   } else if (source === 'openfile') {
   } else {
      // Returnera något meddelande via send
   }
   // const filePath = path.join(
   //    app.getPath('documents'),
   //    'Projects/desktop-haiku/package.json'
   // )
   const filePath = path.join(
      app.getPath('documents'),
      'Projects/desktop-haiku/textfiles/pride.txt'
   )
   file
      .readFileSendContentsToMain(filePath)
      .then(data => {
         console.log('Printing data from main.js: ', data)
         // check
         // skicka data som parameter till fetch anropet till haikugeneratorn.
         // skicka resultatet till webcontents
         // mainWindow.webContents.send(channel.HAIKU_CREATED, data)

         // dispatcha alterHaiku där så att statet uppdateras.

         let childWindow = new BrowserWindow({ width: 550, height: 500 })
         // childWindow.loadURL(???)
         childWindow.on('close', () => {
            console.log('Closing child window')
            childWindow = null
         })
      })
      .catch(err => {
         console.log(err)
      })
   // mainWindow.webContents.send(
   //    'caught',
   //    'Caught log-text, printed text in terminal'
   // )
})
