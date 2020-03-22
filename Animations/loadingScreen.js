

function resizeNav() {
    // Set the nav height to fill the window
    $("#nav-fullscreen").css({"height": window.innerHeight});

    // Set the circle radius to the length of the window diagonal,
    // this way we're only making the circle as big as it needs to be.
    var radius = Math.sqrt(Math.pow(window.innerHeight, 2) + Math.pow(window.innerWidth, 2));
    var diameter = radius * 2;
    $("#nav-overlay").width(diameter);
    $("#nav-overlay").height(diameter);
    $("#nav-overlay").css({"margin-top": -radius, "margin-left": -radius});
}

// Set up click and window resize callbacks, then init the nav.
$(document).ready(function() {
    $("#nav-toggle").click(function() {
        $("#nav-toggle, #nav-overlay, #nav-fullscreen").toggleClass("open");
    });

    $(window).resize(resizeNav);

    resizeNav();
	
	window.setTimeout(function() {
		 $("#nav-toggle").click();
	}, 1000)
});

(function () {
    var canvas = $('canvas')[0];
    var ctx = canvas.getContext('2d');
    var width = canvas.width = window.innerWidth;
    var height = canvas.height = window.innerHeight;
    var particleCount = 20;
    var particles = [];
    
    function init() {
      for (var i = 0; i < particleCount; i++) {
        createParticle();
      }
    }
    
    function createParticle() {
      var newParticle = new Particle();
      newParticle.initialize();
      particles.push(newParticle);
    }
    
    function Particle() {
      this.initialize = function() {
        this.x = Math.random() * width;
        this.y = Math.random() * height + height;
        this.v = 5 + Math.random() * 5;
        this.s = 5 + Math.random() * 5;
      }
      
      this.update = function () {
        this.x += Math.sin(this.s);
        this.s -= 0.1;
        this.y -= this.v * 0.5;
        if (this.isOutOfBounds()) {
          this.initialize();
        }
      }
      
      this.draw = function () {
        ctx.fillRect(this.x, this.y, this.s, this.s);
        ctx.fillStyle = "#FFF";
        ctx.fill();
      }
      
      this.isOutOfBounds = function () {
        return ((this.x < 0) || (this.x > width) || (this.y < 0) || (this.y > height));
      }
    }
    
    function render() {
      ctx.clearRect(0, 0, width, height);
      for (var i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      requestAnimationFrame(render);
    }
  
    window.addEventListener('resize', resize);
    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }
    
    init();
    render();
  })();
