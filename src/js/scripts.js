(function ( $ ) { 

    "use strict";
        
//////////////////////////////////////////////////
//
// Hamburger Menu
//  
//////////////////////////////////////////////////

        $('.header__hamburger').click(function(){
            $('.site-nav__list').toggleClass('is-collapsed');
        });



//////////////////////////////////////////////////
//
// Smooth Scrolling
//  
//////////////////////////////////////////////////


    $( '.site-nav__list a' ).click( function( e ) {
        e.preventDefault();
        var siteNavItem = $( this ).attr( 'href' );
        $( 'html, body' ).animate({ scrollTop : $( siteNavItem ).offset().top }, 'slow');
    });


//////////////////////////////////////////////////
//
// On Scroll Header Widget
//
//////////////////////////////////////////////////

        $(window).on("scroll", function(){

            if($(window).scrollTop() > 50 ) {
                $(".header-contact__item--email").addClass("collapse");
                $(".header-contact__item--phone").addClass("collapse");
                $(".site-nav__list").addClass("is-active");
            } else {
                $(".header-contact__item--email").removeClass("collapse");
                $(".header-contact__item--phone").removeClass("collapse");
                $(".site-nav__list").removeClass("is-active");
            }
        });




//////////////////////////////////////////////////
//
// JQUERY: SLIDER PLUGINS
//
//////////////////////////////////////////////////

    // Pogo Slider
    $('.pogoSlider').pogoSlider({
        autoplay: true,
        autoplayTimeout: 5000,
        displayProgess: true,
        targetWidth: 1920,
        targetHeight: 750,
        responsive: true,
        pauseOnHover: false,
        generateNav: false,
    }).data('plugin_pogoSlider');



    // Light box - featherlightGallery
     $('.gallery').featherlightGallery({
      gallery: {
          fadeIn: 300,
          fadeOut: 300,
          filter: true
      },
      openSpeed: 300,
      closeSpeed: 300
    });

    // $('.counter').counterUp({
    //     delay: 10,
    //     time: 1000
    // });

    $('.counter').each(function() {
      var $this = $(this),
          countTo = $this.attr('data-count');
      
      $({ countNum: $this.text()}).animate({
        countNum: countTo
      },

      {

        duration: 8000,
        easing:'linear',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
          //alert('finished');
        }

      });  
      
      

    });

}( jQuery ));