//

jQuery(document).ready(function() {
    // CLIQUE PARA ABRIR VÍDEO NA HOME
    jQuery('.block-video .left').on('click',function(){
        var thisLink = jQuery(this).find('img').attr('title');
        var formattedLink = thisLink.replace('watch?v=', 'embed/');
        var iframeYt = '<iframe src="'+formattedLink+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        jQuery('.modal-video .video').html(iframeYt);
        jQuery('.modal-video').fadeIn();
    });
    
    jQuery('.modal-video .bg-modal, .modal-video .close-btn').on('click', function(){
        jQuery('.modal-video').fadeOut();
        jQuery('.modal-video iframe').remove();
    });
    // FIM CLIQUE PARA ABRIR VÍDEO NA HOME

    jQuery( ".block-8 .banner-js ul li" ).each(function() {
      jQuery( this ).appendTo( ".banner-marcas" );
    });
    
    jQuery(".block-8 .banner-marcas li .label_text p").each(function(){
      var text = $(this).text();
      var textarray = text.split("|")
      $(this).text(textarray[0])
      $(this).css("background", textarray[1])
    });
  
    jQuery('.banner-marcas li').each(function(){
        var thisContent = $(this).html();
        var container = '<div class="flipper">'+thisContent+'</div>';
        $(this).html(container)
    });

    if(jQuery(window).width() > 760){
      jQuery('.block-3 .showcase ul').slick('unslick');
    
      jQuery('.block-3 .showcase ul').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false
      });
    }
    jQuery('.block-3 h2').append('<div class="departure"><p>As ofertas acabam em</p><span id="countdown"></span></div>');
    const Countdown = (() => {

        let nextMidnight = new Date();
        nextMidnight.setHours(24,0,0,0);
      
        const getRemainingTime = () => {
          let now = new Date();
      
          let time = (nextMidnight.getTime() - now.getTime())/1000;
          
          if(time < 0) {
            nextMidnight = new Date();
            nextMidnight.setHours(24,0,0,0);
            
            return getRemainingTime();
          }
          
          return time;
        }
        
        const parseTime = (time) => {
          const hours = Math.floor(time/3600);
          let rest = time-(hours*3600);
          const minutes = Math.floor(rest/60);
          rest = rest-(minutes*60);
          const seconds = Math.floor(rest);
          const milliseconds = (rest-seconds)*1000;
      
          return [hours, minutes, seconds, milliseconds];
        };
        
        const formatTime = (parsedTime) => {
            return '<span class="hours">' + parsedTime[0] + '</span><span class="hSep">:</span><span class="minutes">' + ("0" + parsedTime[1]).slice(-2) + '</span><span class="mSep">:</span><span class="seconds">' + ("0" + parsedTime[2]).slice(-2) + '</span><span class="mSep">:</span><span class="milliseconds">' + ("0" + parsedTime[3]).slice(-2) + '</span>';
        };
        
        const els = [];
        let timeout;
        
        return (el) => {
          els.push(el);
          
          if(!timeout) {
          
            const refresh = () => {
              const parsedTime = parseTime(getRemainingTime());
              const formattedTimes = formatTime(parsedTime);
              
              for(let i = 0, iend = els.length; i < iend; i++) {
                els[i].innerHTML = formattedTimes;
              }
              
              setTimeout(() => {
                refresh();
              }, parsedTime[3]);
            };
            refresh();
            
          }
          else el.innerHTML = formatTime(parseTime(getRemainingTime()));
        };
      
      })();
      
      Countdown(document.getElementById('countdown'));
});
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




