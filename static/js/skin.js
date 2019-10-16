$(function() {
    // 设置body的高度
    var domHeight = $(document).height()
    var domWidth = $(document).width()
    $('body').height(domHeight + "px")
    $('iframe').height(domHeight + "px")
    $('iframe').width(domWidth + "px")
        // 点击皮肤事件
    $(".skinicon").click(function() {

            if ($(".mask").is(':hidden')) {
                $(".skinicon i").attr("class", "iconfont icon-guanbi1");
                $(".mask,.skincon").toggle();

            } else {
                $(".skinicon i").attr("class", "iconfont icon-icon_shezhi")
                $(".mask,.skincon").toggle()

            }
        })
        // 点击皮肤事件结束

    // 皮肤选择事件
    $('.skin').on("click", function() {
        $(this).siblings(".choose").addClass('on').parent().siblings().children(".skin").removeClass('on')

    })
})