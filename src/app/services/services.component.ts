import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ParticlesModule } from 'angular-particle';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {
  pagination: any = true;
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) {}

  onSlideChange() {
    // console.log('slide change');
  }
  ngOnInit(): void {

        (function() {
  var date, i, lastTime, len, startAngle, style, styleContent, time, timeType, timeTypes;

  styleContent = '';

  timeTypes = ['Second', 'Minute', 'Hour'];

  lastTime = 0;

  date = new Date();

  for (i = 0, len = timeTypes.length; i < len; i++) {
    timeType = timeTypes[i];
    time = date[`get${timeType}s`]();
    if (timeType === 'Hour' && time > 12) {
      time -= 12;
    }
    time += lastTime / 60;
    lastTime = time;
    startAngle = time / (timeType === 'Hour' ? 12 : 60) * 360;
    styleContent += `@keyframes ${timeType.toLowerCase()}Hand {
	from {
		transform: rotate(${startAngle}deg);
	}
	to {
		transform: rotate(${startAngle + 360}deg);
	}
}`;
  }

  style = document.createElement('style');

  style.textContent = styleContent;

  document.head.appendChild(style);

}).call(this);

  //  click to navbar button going of header  
  $(".nav-link").click( function() {
    $(window).scrollTop(0);
  });


  }

  navigateToContacts() {
    this.router.navigate(['/contacts'], {
      relativeTo: this.activatedRoute.parent,
    });
  }


  width: number = 100;
  height: number = 100;
   
    myStyle: Object = {
      'position': 'relative',
      'width': '100%',
      'height': '-webkit-fill-available',
      'background':'#000',
      'z-index': 0,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
    };
    myParams: object = {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#000"
        },
        "shape": {
          "type": "tringle",
          "polygon": {
            "nb_sides": 12
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.6,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#fff",
          "opacity": 0.4,
          "width": 1.5
        },
        "move": {
          "enable": true,
          "speed": 4,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": false
    };


  
// ==========================================================


}




