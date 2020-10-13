/* sweetScroll load */
document.addEventListener("DOMContentLoaded", function () {
  const sweetScroll = new SweetScroll({/* some options */});

  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 0,
        "density": {
          "enable": true,
          "value_area": 0
        }
      },
      "color": {
        "value": "#3f51b5"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 0
        },
        "image": {
          "src": "img/github.svg",
          "width": 0,
          "height": 0
        }
      },
      "opacity": {
        "value": 0,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 0,
          "opacity_min": 0,
          "sync": false
        }
      },
      "size": {
        "value": 0,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 0,
          "size_min": 0,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 0,
        "color": "#ffffff",
        "opacity": 0,
        "width": 0
      },
      "move": {
        "enable": true,
        "speed": 0,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 600
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "bubble"
        },
        "onclick": {
          "enable": false,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 0,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 0,
          "size": 0,
          "duration": 0,
          "opacity": 0,
          "speed": 0
        },
        "repulse": {
          "distance": 0,
          "duration": 0
        },
        "push": {
          "particles_nb": 0
        },
        "remove": {
          "particles_nb": 0
        }
      }
    },
    "retina_detect": true
  });

}, false);
