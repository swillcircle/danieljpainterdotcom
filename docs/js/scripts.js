/////////////////////////////////////////////////SCROLL NAV
$(document).ready(function(){
  var scrollTop = 0;

  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();

    if (scrollTop >= 1000) {
      $('.logo').addClass('scrolled-nav');
    } else if (scrollTop < 1000) {
      $('.logo').removeClass('scrolled-nav');
    }
  });

  $(function() {
    var pgurl = window.location.href.substr(window.location.href

    .lastIndexOf("/")+1);
         $("nav a").each(function(){
              if($(this).attr("href") == pgurl || $(this).attr("href") == '' )
              $(this).addClass("selected");
         })
    });
});
