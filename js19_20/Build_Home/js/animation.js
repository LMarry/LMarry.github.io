$(function () {
    $('.jcarousel').jcarousel({

    });
    
    $(window).resize(function(){
        if($(this).width() <= 1160){
            
        
        $('.jcarousel').css({'width': $(this).width()});
        $('.jcarousel li').css({'width': $(this).width()});
    }
        else{
            $('.jcarousel').css({'width': '1160px'});
        $('.jcarousel li').css({'width': '1160px'});
        }
    })
    $('.jcarousel-pagination').jcarouselPagination({
        item: function (page) {
            return '<a href="#' + page + '">' + page + '</a>';
        }
    });
    
    $(document).on('click', '.jcarousel-pagination a', function(){
        console.log($(this));
        $.each($('.jcarousel-pagination a'), function(){
            $(this).css({'background-color': '#ffffff'});
        });
        $(this).css({'background-color': '#000000'});
    });
    
    
//    $('select').styler();
    
    $( '.dropdown' ).hover(
    function(){
        $(this).children('.sub-menu').slideDown(200)
        .animate({
        backgroundColor:'#fc9f9f'
        }, 500 );
        

    },
    function(){
        $(this).children('.sub-menu').slideUp(200)
        .animate({
        backgroundColor:'#e00'
        }, 500 );
    })
    
    $(".banner__info").hide();
	$(".banner__expand").click(function(){
        var $banner_hover = $(".banner_hover");
        var $banner__expand = $(this);
        var $banner = $(this).parent().parent();
        
        if ($banner_hover.get(0) == $banner.get(0)) {

            $banner.removeClass('banner_hover');
            $banner__expand.html('+');
            $banner__expand.parent().next().slideToggle();
        }   else {
            $banner_hover.removeClass('banner_hover');
            $banner_hover.find('.banner__expand').html('+');
            $banner_hover.find('div').slideToggle();
            $banner.addClass('banner_hover');
            $banner__expand.html('-');
            $banner__expand.parent().next().slideToggle();            
        }  
	});
    
    $(".banner__expand").first().trigger("click");
});

