
$(document).ready(function() {

    $('#menu-bar').click(function() {
       $(this).toggleClass('fa-times');
       $('.barsSlide').toggleClass('nav-toggle'); 
    });    

    $(window).on('load scroll', function() {
        
        $('#menu-bar').removeClass('fa-times');
        $('.barsSlide').removeClass('nav-toggle');
       
       $('section').each(function(){

            let top = $(window).scrollTop();
            let height = $(this).height();
            let id = $(this).attr('id');
            let offset = $(this).offset().top - 200;

            if(top > offset && top < offset + height){
                $('.barsSlide ul li a').removeClass('active');
                $('.barsSlide').find(`[href="#${id}"]`).addClass('active');
            }

        });


    });

    $('.menu .liste .btn').click(function() {
       $(this).addClass('active').siblings().removeClass('active'); 
    
       let src = $(this).attr('data-src');
       $('#menu-img').attr('src', src); 
    
    });

})