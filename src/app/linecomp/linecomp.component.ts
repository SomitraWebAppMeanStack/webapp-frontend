import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-linecomp',
  templateUrl: './linecomp.component.html',
  styleUrls: ['./linecomp.component.css']
})
export class LinecompComponent implements OnInit {

  constructor() { 
    
  }

  
  ngOnInit(): void {
     // 2nd clock start clock 
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
  }
  

  
}
