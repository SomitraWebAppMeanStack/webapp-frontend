import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demopage',
  templateUrl: './demopage.component.html',
  styleUrls: ['./demopage.component.css']
})
export class DemopageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      // ====================1th mobile card section==================

    $('#ParallelImage1').on('mouseenter', function() {
        $('.SplitImage1').find('img').css('transform', 'translateY(10px)');
        $('.SplitImage1').find('img').css('transition', '.2s');
   
      }).on('mouseleave', function() {
        $('.SplitImage1').find('img').css('transform', 'translateY(0)');
        $('.SplitImage1').find('img').css('transition', '.2s');
        
      });

      $('#ParallelImage1').on('mouseenter', function() {
        $('.SplitImage2').find('img').css('transform', 'translateY(-8px)');
        $('.SplitImage2').find('img').css('transition', '.2s');
    
      }).on('mouseleave', function() {
        $('.SplitImage2').find('img').css('transform', 'translateY(0)');
        $('.SplitImage2').find('img').css('transition', '.2s');
    
      });

      // ====================2th mobile card section==================
      $('#ParallelImage2').on('mouseenter', function() {
        $('.SplitImage3').find('img').css('transform', 'translateY(10px)');
        $('.SplitImage3').find('img').css('transition', '.2s');
   
      }).on('mouseleave', function() {
        $('.SplitImage3').find('img').css('transform', 'translateY(0)');
        $('.SplitImage3').find('img').css('transition', '.2s');
        
      });

      $('#ParallelImage2').on('mouseenter', function() {
        $('.SplitImage4').find('img').css('transform', 'translateY(-8px)');
        $('.SplitImage4').find('img').css('transition', '.2s');
    
      }).on('mouseleave', function() {
        $('.SplitImage4').find('img').css('transform', 'translateY(0)');
        $('.SplitImage4').find('img').css('transition', '.2s');
    
      });


      // ====================6th mobile card section==================
      $('#ParallelImage3').on('mouseenter', function() {
        $('.SplitImage5').find('img').css('transform', 'translateY(10px)');
        $('.SplitImage5').find('img').css('transition', '.2s');
   
      }).on('mouseleave', function() {
        $('.SplitImage5').find('img').css('transform', 'translateY(0)');
        $('.SplitImage5').find('img').css('transition', '.2s');
        
      });

      $('#ParallelImage3').on('mouseenter', function() {
        $('.SplitImage6').find('img').css('transform', 'translateY(-8px)');
        $('.SplitImage6').find('img').css('transition', '.2s');
    
      }).on('mouseleave', function() {
        $('.SplitImage6').find('img').css('transform', 'translateY(0)');
        $('.SplitImage6').find('img').css('transition', '.2s');
    
      });
       // ====================11th card section==================
       $('#ParallelImage11').on('mouseenter', function() {
        $('.SplitImage7').find('img').css('transform', 'translateY(10px)');
        $('.SplitImage7').find('img').css('transition', '.2s');
   
      }).on('mouseleave', function() {
        $('.SplitImage7').find('img').css('transform', 'translateY(0)');
        $('.SplitImage7').find('img').css('transition', '.2s');
        
      });

      $('#ParallelImage11').on('mouseenter', function() {
        $('.SplitImage8').find('img').css('transform', 'translateY(-8px)');
        $('.SplitImage8').find('img').css('transition', '.2s');
    
      }).on('mouseleave', function() {
        $('.SplitImage8').find('img').css('transform', 'translateY(0)');
        $('.SplitImage8').find('img').css('transition', '.2s');
    
      });
       // ====================14th card section==================
       $('#ParallelImage14').on('mouseenter', function() {
        $('.SplitImage14').find('img').css('transform', 'translateY(10px)');
        $('.SplitImage14').find('img').css('transition', '.2s');
   
      }).on('mouseleave', function() {
        $('.SplitImage14').find('img').css('transform', 'translateY(0)');
        $('.SplitImage14').find('img').css('transition', '.2s');
        
      });

      $('#ParallelImage14').on('mouseenter', function() {
        $('.SplitImage14_').find('img').css('transform', 'translateY(-8px)');
        $('.SplitImage14_').find('img').css('transition', '.2s');
    
      }).on('mouseleave', function() {
        $('.SplitImage14_').find('img').css('transform', 'translateY(0)');
        $('.SplitImage14_').find('img').css('transition', '.2s');
    
      });
         // ====================15th card section==================
         $('#ParallelImage15').on('mouseenter', function() {
          $('.SplitImage15').find('img').css('transform', 'translateY(10px)');
          $('.SplitImage15').find('img').css('transition', '.2s');
     
        }).on('mouseleave', function() {
          $('.SplitImage15').find('img').css('transform', 'translateY(0)');
          $('.SplitImage15').find('img').css('transition', '.2s');
          
        });
  
        $('#ParallelImage15').on('mouseenter', function() {
          $('.SplitImage15_').find('img').css('transform', 'translateY(-8px)');
          $('.SplitImage15_').find('img').css('transition', '.2s');
      
        }).on('mouseleave', function() {
          $('.SplitImage15_').find('img').css('transform', 'translateY(0)');
          $('.SplitImage15_').find('img').css('transition', '.2s');
      
        });
// laptop size  code 
    
    // $('.project_box').on('mouseenter', function() {
    //     $('.first_image_laptop').find('img').css('transform', 'translateX(-80px)');
    //     $('.first_image_laptop').find('img').css('transition', '.5s');
     
   
    //   }).on('mouseleave', function() {
    //     $('.first_image_laptop').find('img').css('transform', 'translateX(0)');
    //     $('.first_image_laptop').find('img').css('transition', '.5s');
      

        
    //   });

    //   $('.project_box').on('mouseenter', function() {
    //     $('.second_image_laptop').find('img').css('transform', 'translateX(100px)');
    //     $('.second_image_laptop').find('img').css('transition', '.5s');
    
    //   }).on('mouseleave', function() {
    //     $('.second_image_laptop').find('img').css('transform', 'translateX(0)');
    //     $('.second_image_laptop').find('img').css('transition', '.5s');
    
    //   });



  }

}
