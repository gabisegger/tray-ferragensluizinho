//
if(jQuery(window).width() < 760){
    //breadcrumb
    if(jQuery('.page-central_lista_espera').length){
        jQuery('.breadcrumb.central-breadcrumb').prependTo('.site-main.container');
    }
    //fim breadcrumb
   
    //posts-blog
    jQuery('.blog-posts').slick();
    //fim posts-blog
   
    
    jQuery('.products-related > .row').slick();

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




