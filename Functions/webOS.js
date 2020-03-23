var lgtv = require("lgtv2")({
        url: 'ws://lgwebostv:3000'
});



//Connecting to WebOS

window.onload = function WebOS() {
  
console.log('Connecting with WebOS')
      

    
   lgtv.on('connect', function () {
    if (lgtv.on = 'connect'){
  
            console.log("Connected");
            $('.indicator').css('display', 'block');
            $(".deviceName").text('LG TV');
          
    } else {

            console.log(err);
            $('.alert').css('display', 'block');
    }
        
  });

}


//Checking internet connection

console.log('Do i have internet connection: ' + navigator.onLine);


window.addEventListener('offline', () => {
        $('.alert').toggle();
        $(".alert").text('No Internet Connection!');
        $('.indicator').toggle();
        $('.deviceName').toggle();
});

window.addEventListener('online', () => {
        $('.alert').toggleClass('alert-danger alert-success')
        $(".alert").text('Connection restored!');
        $('.alert-success').delay(5000).fadeOut();
        $('.indicator').toggle();
        $('.deviceName').toggle();

});

//----------------------------------WebOS Panel-------------------------------------

//webOS Panel toggle
        
$('#webOS').on('click', function(){
                $('.btn-container').toggle();   
                $('.webOSPanel').toggle();
                $('.back').toggle();
        })

        $('.back').on('click', function(){
                $('.btn-container').toggle();   
                $('.webOSPanel').toggle();
                $('.back').toggle();
        })


//webOS volume control

        $('.dial').knob({
                "min": 0,
                "max": 100,
                'width': 150,
                'height': 150,
                'displayInput': true,
                'fgColor': '#70a1ff',
                'bgColor': '#f5f5f5',
                'font': 'Montserrat',
                'fontWeight': '600',
                'data-angleOffSet': 90,
                'data-lineCap': 'round',
                'format' : function (value) {
                        return value + '%';
                },


                //Change TV volume
                'release' : function setVolume (v) {
                        console.log('Setting volume to ' + v)
                        lgtv.request('ssap://audio/setVolume', {volume: v});
        
                }
                
        });

//webOS volume off control


        $('.volumeOff').on('click', function() {
                $(this).find('i').toggleClass('fa-volume-off fa-volume-down')
                if($(this).find('i').hasClass('fa-volume-off')){
                        lgtv.request('ssap://audio/setMute', {mute: true})
                } else {
                        ($(this).find('i').addClass('fa-volume-down'))
                        lgtv.request('ssap://audio/setMute', {mute: false})
                }
                
        })



//WebOS Power on/ff

        $('.shutDown').on('click', function() {
                lgtv.request('ssap://system/turnOff', function (err, res) {
                        lgtv.disconnect();
                });
        })


//WebOS Apps

        $('.netflixBtn').on('click', function() {
                lgtv.request('ssap://system.launcher/launch', {id: 'netflix'});
                console.log('Opening Netflix')
        });
        

        $('.youtubeBtn').on('click', function() {
                lgtv.request('ssap://system.launcher/launch', {id: 'youtube.leanback.v4'});
                console.log('Opening Youtube')
        });
