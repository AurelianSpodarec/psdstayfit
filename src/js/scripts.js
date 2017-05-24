jQuery(document).ready(function($){
        //Hamburger Menu
        // $('.c-mainNavigationPanel--mobileMenuButton').click(function(){
        //     $('.c-mainNavigationPanel--menuContainer').slideToggle();
        // });

        //Menu Change on scroll
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



});