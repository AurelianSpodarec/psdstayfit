jQuery(document).ready(function($){
        
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
// JQUERY: SLIDER PLUGIN FROM CODEPEN - https://codepen.io/rockteam/pen/YwZeLW?editors=1100
//
//////////////////////////////////////////////////

// var imageWidth = 1024;
// // Slider content loaded
// $(window).ready(function() {
//   var currentImage = 0;
//   //Image count
//   //attach click event to slideshow buttons
//   $('.nextarrow').click(function() {
//     //increase image count
//     currentImage++;
//     // if we are at end let set it to 0
//     if (currentImage >= allImages) currentImage = 0;
//     // calculate  and set position
//     setFramePosition(currentImage);
//   });
//   //attach click event to slideshow buttons
//   $('.prevarrow').click(function() {
//     //increase image count
//     currentImage--;
//     // if we are at end let set it to 0
//     if (currentImage < 0) currentImage = allImages - 1;
//     // calculate  and set position
//     setFramePosition(currentImage);
//   });
// });

// // Slider
//   var slideCount = $('#slider2 ul li').length;
//   var slideWidth = $('#slider2 ul li').width();
//   var slideHeight = $('#slider2 ul li').height();
//   var sliderUlWidth = slideCount * slideWidth;

//   $('#slider2').css({
//     width: slideWidth,
//     height: slideHeight
//   });
//   $('#slider2 ul').css({
//     width: sliderUlWidth,
//     marginLeft: -slideWidth
//   });
//   $('#slider2 ul li:last-child').prependTo('#slider2 ul');

//   function moveLeft() {
//     $('#slider2 ul').animate({
//       left: +slideWidth
//     }, 200, function() {
//       $('#slider2 ul li:last-child').prependTo('#slider2 ul');
//       $('#slider2 ul').css('left', '');
//     });
//   };

//   function moveRight() {
//     $('#slider2 ul').animate({
//       left: -slideWidth
//     }, 200, function() {
//       $('#slider2 ul li:first-child').appendTo('#slider2 ul');
//       $('#slider2 ul').css('left', '');
//     });
//   };

//   // Slider Arrows
//   $('#slider2 .prevarrow2').click(function() {
//     moveLeft();
//   });
//   $('#slider2 .nextarrow2').click(function() {
//     moveRight();
//   });

//   // auto play function
//   setInterval(function() {
//     moveRight();
//   }, 3300);
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

           // var mySlider = $('.pogoSlider').pogoSlider().data('plugin_pogoSlider');

           //          mySlider.pause(); // Pauses the slider on the current slide, only works if autoplay option set to true

           //          mySlider.resume(); // Resumes the slider back to normal operation

           //          mySlider.nextSlide(); // Transition to the next slide

           //          mySlider.prevSlide(); // Transition to the previous slide

           //          mySlider.destroy(); // Destroys the plugin, restoring elements to their default state



// }); //jQuery 



});
