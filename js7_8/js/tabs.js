$(function () {

    //tabs switching

    $('.block__panel').on('click', 'a:not(.active)', function () {
        $(this).addClass('active').siblings().removeClass('active')
            .closest('.block').find('.block__text').removeClass('active')
            .eq($(this).index()).addClass('active');


        $("#tipForm input").trigger('mouseout');
    })

});