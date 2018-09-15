/////////////////////////////////////////////////SCROLL NAV
$(document).ready(function(){
  var scrollTop = 0;
  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();

    if (scrollTop >= 100) {
      $('.primary-header').addClass('scrolled-nav');
    } else if (scrollTop < 100) {
      $('.primary-header').removeClass('scrolled-nav');
    }
  });
  
  switch (window.location.href) {
      case '/index':
          $('#work-nav').addClass('selected')
      case '/about':
          $('#info-nav').addClass('selected')
      case '/contact':
          $('#contact-nav').addClass('selected')
  };
});
