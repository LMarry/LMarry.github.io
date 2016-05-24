$(function () {
    $('.jcarousel').jcarousel({

    });

    $('.jcarousel-prev').jcarouselControl({
        target: '-=1'
    });

    $('.jcarousel-next').jcarouselControl({
        target: '+=1'
    });
    
    $('.jcarousel-pagination').jcarouselPagination({
        item: function (page) {
            return '<a href="#' + page + '">' + page + '</a>';
        }
    });
    
    $('.jcarousel').jcarouselAutoscroll({
        interval: 3000
        , target: '+=1'
        , autostart: true
    });
    
    $('select').styler();
    
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
    
});