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
}




