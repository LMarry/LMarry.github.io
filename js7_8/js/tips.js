    var flag = 0;

    function simple_tooltip(target_items, name) {
        $(target_items).each(function (i) {
            $("body").append("<div class='" + name + "' id='" + name + i + "'><p>" + $(this).attr('title') + "</p></div>");
            var my_tooltip = $("#" + name + i);
            var $el = $(this)[0];
            $(this).removeAttr("title").mouseover(function () {
                    if ($(this).hasClass('tip_on'))
                        return;
                    my_tooltip.css({
                        opacity: 0.8
                        , display: "none"
                        , left: $el.offsetWidth + $el.offsetLeft + 15
                        , top: $el.offsetTop
                    }).fadeIn(200);
                    $(this).addClass('tip_on');
                })
                .mouseout(function () {
                    my_tooltip.fadeOut(200);
                    $(this).removeClass('tip_on');
                });
        });
    }

    $(function () {
        simple_tooltip("#tipForm input", "tooltip");
        $('#all_tips_button').on('click', function () {
            if ($(".tip_on").length < 3)
                $("#tipForm input").trigger('mouseover');
            else
                $("#tipForm input").trigger('mouseout');
        })
    });