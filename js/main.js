$(function() {
    var i = 0;
    var bganimate = setInterval(function() {
        i += -100;
        $(".conbg").css("backgroundPositionY", i);
        // $(".conbg").css("backgroundPositionX", "0px");

        if (i < -6000) {
            i = 0;
        }

        // if (i <= -6000) {
        //     clearInterval(bganimate)
        // }
    }, 50)
})