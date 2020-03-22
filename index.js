

const electron = require('electron'),
    url = require('url'),
    path = require('path');



const {app, BrowserWindow, Menu, globalShortcut, remote} = electron;




// Enable live reload for Electron too
require('electron-reload')(__dirname, {
  // Note that the path to electron may vary according to the main file
  electron: require(`${__dirname}/node_modules/electron`)
});

//Keyboard shortcuts
app.whenReady().then(() => {
    globalShortcut.register('Control+Q', () => {
      app.quit();
    })
  })


//-----------------------------------------------------------------------------------


app.on('ready', function(){
  // Create new window
  homeWindow = new BrowserWindow({resizable:false, frame:false, webPreferences: {
    nodeIntegration: true
    }});
  homeWindow.setMenuBarVisibility(false)
  // Load html in window
  homeWindow.loadURL(url.format({
      pathname: path.join(__dirname, 'routes/homeWindow.html'),
      protocol: 'file:',
      slashes: true

      
  }))

});

//-----------------------------------------------------------------------------------
 


//-----------------------------------------------------------------------------------

app.on('ready', function() {
  
    // Create new window
    loadingWindow = new BrowserWindow({resizable:false, frame:false, webPreferences: {
      nodeIntegration: true
  }});
    loadingWindow.setMenuBarVisibility(false)
    // Load html in window
    loadingWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'routes/loadingWindow.html'),
        protocol: 'file:',
        slashes: true
    }))
  
  
  
})





  
