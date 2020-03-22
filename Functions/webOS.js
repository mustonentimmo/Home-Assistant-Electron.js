var lgtv = require("lgtv2")({
        url: 'ws://lgwebostv:3000'
});
    


window.onload = function() {
  
console.log('Connecting with WebOS')
      

    
  lgtv.on('connect', function () {
    if (lgtv.on = 'connect'){
  
            console.log("Connected");
            $('.dot').css('display', 'block');
            $(".deviceName").text('LG TV');
          
    } else {

            console.log(err);
            $('.alert').css('display', 'block');
    }
        
  });
    
//WebOS panel toggle

}

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








   