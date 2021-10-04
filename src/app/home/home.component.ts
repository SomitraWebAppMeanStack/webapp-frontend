import {
  AfterViewInit,
  Component,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { Subscription } from 'rxjs';
// import * as $ from 'jquery';



declare var anime: any; 
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  pagination: any = true;
  subscription: Subscription;
  browserRefresh: boolean = false;
  lastScroll: number = 0;
  isDownScrolled: Boolean = true;
  isTopScrolled: Boolean = true;





  ngOnInit(): void {
    this.browserRefresh = this.browserRefresh;
    // console.log('refreshed?:', this.browserRefresh);
    // this.scrollToTop();
 
   
    // home slider hover to push slider stop code 
    $(document).ready(function() { 
      $('#carouselExampleCaptions').carousel({ interval: 4000, cycle: true,pause: "false" });
    }); 

   // program to display a text using setTimeout method

 window.onload = function(){
      setTimeout(() => {
        var el = document.getElementById('splash');
        el.style.overflow = 'hidden';
        el.style.display = 'none';
      }, 5000);
    };

  
   
  }

  

  @HostListener('window:scroll', [])
  onWindowSscroll() {
    let currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;
    // console.log(currentScroll);
    if (currentScroll > this.lastScroll) {
      // console.log('scrolling down');
      this.isDownScrolled = true;
    } else {
      this.isDownScrolled = false;
      // console.log('scrolling up');
    }
    this.lastScroll = currentScroll;
  }

  


 
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) {
    this.subscription = router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.browserRefresh = !router.navigated;
      }
    });
  }

  goToServices() {
    this.router.navigate(['services']);
  }

  scrollToTop() {
    window.scroll(0, 0);
  }

  scrollToBottom() {
    window.scroll(0, document.body.scrollHeight);
  }



  

}
