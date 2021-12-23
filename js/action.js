//
if(jQuery(window).width() < 760){
    // Slider de diferenciais na home
    jQuery('.page-home .block-2 ul').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
    });
    //breadcrumb
    if(jQuery('.page-central_lista_espera').length){
        jQuery('.breadcrumb.central-breadcrumb').prependTo('.site-main.container');
    }
    //fim breadcrumb
   
    //posts-blog
    jQuery('.blog-posts').slick({
        slidesToShow: 2,
        slidesToScroll: 2
    });
    //fim posts-blog
    
    jQuery('.products-related > .row').slick();

    if(jQuery('html.page-home').length) {
        jQuery('.showcase > .slick-slider').slick('unslick');
        jQuery('.showcase > ul').slick({
            slidesToShow: 2,
            slidesToScroll: 1
        });
    }
    //click hamburger
    jQuery('.hamburger').on('click', function(){
        jQuery('.menu-mobile').addClass('active');
        jQuery('.menu-mobile-backdrop').addClass('active')
    })
    //fim click hamburger
    //click close-menu
    jQuery('.close-menu').on('click', function(){
        jQuery('.menu-mobile').removeClass('active');
        jQuery('.menu-mobile-backdrop').removeClass('active')
    })
    jQuery('.menu-mobile-backdrop').on('click', function(){
        jQuery('.menu-mobile').removeClass('active');
        jQuery('.menu-mobile-backdrop').removeClass('active')
    })
     //fim click close-menu
}




