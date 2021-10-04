import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
// import * as $ from 'jquery';
import { Router, NavigationEnd } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})



export class AppComponent implements OnInit {

  private cookie_name='';
  private all_cookies:any='';

  constructor(private router: Router, private cookieService:CookieService) { }

  title = 'webapp';
  ngOnInit(): void {
    AOS.init();
    // this.cookie_name=this.cookieService.get('name');
    // this.all_cookies=this.cookieService.getAll();

    this.cookieService.set('name','webapp');

    

// when click to load page on the top 
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
     });
 
     

    



    // click to hide  in mobile view text
    $("#navbarSupportedContent").click(function(){
      $("#navbarSupportedContent").hide();
    });

  

    // loader script  
    let darkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTimeout(() => {
      $('#pulsePreLoader').fadeToggle()
    }, 1000);




  
// navbar hide and show on scrolling 

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
        

      // in mobile view 
        if(window.matchMedia("(max-width: 767px)").matches){
         
          document.getElementById("navbar").style.top = "0";
        } else{
          document.getElementById("navbar").style.top = "-200px";
        }
    }
    prevScrollpos = currentScrollPos;
  }

 
 
// sidebar active when click navbar on burgur icon  right slider
       $(document).ready(function(){
            $('.navTrigger').click(function(){
                $('.menu').toggleClass('active');
       });

// toggle sidebar 
            // $(document).ready(function(){
            //   $('.navTrigger').click(function() {
            //       $(this).toggleClass('active');
            //   });
            // });

// remove when click on teget hide sidebar
            
$(".menu a").on('click', function() {
  $(".menu").removeClass('active');

});
           
        });
       
// run the function when clicking on sidebar onject 


  }
  scrollTop() {
    window.scroll(0, document.body.scrollHeight);
  }


  mainColor: Boolean = true;
  MainPageTextColor()
  {}



    color="rgb(202, 202, 202)"
   changeColor(){
     this.color="#cacaca";
   }

  //  navbar  APi =====================
   NavbarData=[
    {
      services:'Services',project:'Project', overteam:'Over Team', content:'Contact'
    },
   
  ];

  // ------------------Cookie------------------------------

  // setCookie(){
  //   this.cookieService.set('name','webapp');
  // }
   
 
}


