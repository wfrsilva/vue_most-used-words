const { ipcMain } = require('electron')

ipcMain.on('blabla', (event, arg) => {
    console.log(arg)

    event.reply('blublu', 'pong do backend index blu')
})