$(document).ready(function() {

    $("#menulink").click(function (a) {
        a.preventDefault(),
        $(".navigation-wrapper").hasClass("show-menu") ?
            (
                $(".navigation-wrapper").removeClass("show-menu"),
                $(".navigation").hide(),
                $(".navigation li").removeClass("small-padding")
            )
        :
            (
                $(".navigation-wrapper").addClass("show-menu").fadeIn(),
                $(".navigation").fadeIn(),
                $(".navigation li").addClass("small-padding")
            )
    })

});