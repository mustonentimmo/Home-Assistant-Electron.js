

$(document).ready(function(){

    const remote = require('electron').remote

    $('.close').on('click', function(){
        remote.getCurrentWindow().close() 
    })
})



