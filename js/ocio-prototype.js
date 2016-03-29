
// SMOOTH SCROLL
$(function() {
  $('.smoothscroll').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


// HEADER
$(window).scroll(function() {    
	var scroll = $(window).scrollTop();

	if (scroll >= 555) {
		$(".app-header").addClass("has-border");
	}
	else {
		$(".app-header").removeClass("has-border");
	}
}); 


// SCROLL TO TOP
$(window).scroll(function() {    
	var scroll = $(window).scrollTop();

	if (scroll >= 200) {
		$(".scroll-top").addClass("visible");
	}
	else {
		$(".scroll-top").removeClass("visible");
	}	
}); 