import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';


@Component({
  selector: 'app-oursecret',
  templateUrl: './oursecret.component.html',
  styleUrls: ['./oursecret.component.css']
})
export class OursecretComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      //  click to navbar button going of header  
      $(".nav-link").click( function() {
        $(window).scrollTop(0);
      });
  
    
  }



}
