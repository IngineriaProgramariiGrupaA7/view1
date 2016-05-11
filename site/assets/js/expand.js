$(document).ready(function() {

    $(".form_section_title").click(function() {
        $(this).toggleClass("section_selected");

        var el = $(this).parent().children(".form_content");

        if ($(this).parent().children(".form_content").hasClass("collapse")) {
            el.animate({
                'padding-top': '15px',
                'padding-right': '15px',
                'padding-bottom': '15px',
                'padding-left': '15px',
            },100);

            el.animate({
                height: el.scrollHeight
            }, 10, function() {
                $(this).height('auto');
            });

        } else {

            el.animate({
                height: el.scrollHeight
            }, 10, function() {
                $(this).height('0');
            });

            el.animate({
                'padding-top': 0,
                'padding-right': '15px',
                'padding-bottom': 0,
                'padding-left': '15px',
            }, 100);

        }

        el.toggleClass("collapse");
    });

});
