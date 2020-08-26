$(document).ready(function () {
    $('.showmenu').on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('open-menu');
    });
});

function openLi(e) {
    $(".drop-down-menu").removeClass("open-li");
    $(e).children(".drop-down-menu").toggleClass('open-li');
}

$(document).ready(function () {
    $('.top a').click(function () {
        console.log("top被點擊了");
        var target = $(this).attr('href');
        console.log(target);
        var targetPosition = $(target).offset().top;
        console.log(targetPosition);
        var navbarHeight = 56;
        var duration = 800;
        $('html,body').animate({
            scrollTop: targetPosition - navbarHeight
        }, duration);
    });
});