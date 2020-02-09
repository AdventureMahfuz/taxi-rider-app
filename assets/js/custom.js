(function ($) {
    $(document).ready(function () {
        //table modal
        $('.modal').modal();

        //on scroll header fix
        $(window).on('scroll', function () {
            var scroll = $(window).scrollTop();
            if (scroll > 0) {
                $("header").addClass("fixed-top");
            } else {
                $("header").removeClass("fixed-top");
            }
        });
    });
})(jQuery);