function isElementInViewport(elem) {
    var $elem = $(elem);
   
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    
    var elemTop = Math.round( $elem.offset().top );
    var elemBottom = elemTop + $elem.height();

    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}

function checkAnimation() {
    var $elem1 = $('.mi-barra-html');
    var $elem2 = $('.mi-barra-css');
    var $elem3 = $('.mi-barra-js');
    var $elem4 = $('.mi-barra-java');
    var $elem5 = $('.mi-barra-php');
    var $elem6 = $('.mi-barra-git');

    if (isElementInViewport($elem1)) {
       
        $elem1.addClass('start');
    } else {
        $elem1.removeClass('start');
    }

    if (isElementInViewport($elem2)) {
       
        $elem2.addClass('start');
    } else {
        $elem2.removeClass('start');
    }

    if (isElementInViewport($elem3)) {
       
        $elem3.addClass('start');
    } else {
        $elem3.removeClass('start');
    }

    if (isElementInViewport($elem4)) {
       
        $elem4.addClass('start');
    } else {
        $elem4.removeClass('start');
    }

    if (isElementInViewport($elem5)) {
       
        $elem5.addClass('start');
    } else {
        $elem5.removeClass('start');
    }

    if (isElementInViewport($elem6)) {
       
        $elem6.addClass('start');
    } else {
        $elem6.removeClass('start');
    }
}


$(window).scroll(function(){
    checkAnimation();
});


if(!Modernizr.cssanimation){
    $(function() {
        $('#menu1').hover(function(){
            $(this).animate({padding:'0px 200px'},{queue:false,duration:1000});
        }, function() {
            $(this).animate({padding:'0px 0px'},{queue:false,duration:500});
        });

        $('#menu2').hover(function(){
            $(this).animate({padding:'0px 200px'},{queue:false,duration:1000});
        }, function() {
            $(this).animate({padding:'0px 0px'},{queue:false,duration:500});
        });

        $('#menu3').hover(function(){
            $(this).animate({padding:'0px 200px'},{queue:false,duration:1000});
        }, function() {
            $(this).animate({padding:'0px 0px'},{queue:false,duration:500});
        });

        $(function(){
            $('.mi-barra-html').animate({width:'75%'},{queue:false,duration:3000});
        });

        $(function(){
            $('.mi-barra-css').animate({width:'66%'},{queue:false,duration:3000});
        });

        $(function(){
            $('.mi-barra-js').animate({width:'60%'},{queue:false,duration:3000});
        });

        $(function(){
            $('.mi-barra-java').animate({width:'55%'},{queue:false,duration:3000});
        });

        $(function(){
            $('.mi-barra-php').animate({width:'65%'},{queue:false,duration:3000});
        });

        $(function(){
            $('.mi-barra-git').animate({width:'80%'},{queue:false,duration:3000});
        });
    });
}