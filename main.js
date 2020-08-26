// When the user scrolls the page, execute myFunction 
window.onscroll = function () {
    myFunction()
};

// Get the navbar
var navbar = document.getElementById("menu");
var navbar = document.getElementById("wrap");
// Get the offset position of the navbar
var sticky = menu.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        menu.classList.add("sticky-menu")
        wrap.classList.add("sticky-wrap")

    } else {
        menu.classList.remove("sticky-menu");
        wrap.classList.remove("sticky-wrap");
    }
}

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