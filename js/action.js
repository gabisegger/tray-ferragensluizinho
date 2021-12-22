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
}




