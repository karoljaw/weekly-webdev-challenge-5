$(document).ready(function() {
    var navbar = $('.navbar');

    $(".icon-menu").on("click", function() {
        $(".nav__menu").toggleClass("active-menu");
        navbar.removeClass('navbar-scroll');
    })
    $(".nav__item").on("click", function() {
        $(".nav__menu").removeClass("active-menu");
    })
    $(window).scroll(function(){
		if($(window).scrollTop() <= 40 || $(".nav__menu").hasClass("active")){
			navbar.removeClass('navbar-scroll');
		} else {
			navbar.addClass('navbar-scroll');
		}
	});
})
