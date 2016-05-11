(function ($) {
    $.fn.carousel = function () {
        var left = $('.pointer--left');
        var right = $('.pointer--right');
        var list = $('.carousel-list');
        var currentPosition = 0;
        var offset = 125;
        var elements = list.find('li').length;
        var minimumOffset = -((elements - 5) * offset);
        var maximumOffset = 0;

        left.on('click', function () {
            if (currentPosition != maximumOffset) {
                currentPosition += 125;
                list.animate({
                    left: currentPosition + "px"
                }, 500);
            }
        })

        right.on('click', function () {
                if (currentPosition != minimumOffset) {
                    currentPosition -= 125;
                    list.animate({
                        left: currentPosition + "px"
                    }, 500);
                }
        })
    }
})(jQuery)