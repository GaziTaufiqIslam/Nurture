$(window).scroll(function () {
  var wScroll= $(this).scrollTop();
  var winH = $(window).height();

  if(wScroll > winH) {
    $('nav').addClass('show');
  }
  else {
    $('nav').removeClass('show');
  }
});

function smoothScroll(duration) {
  $('a[href^="#"]').on('click', function(event){
    var target=$( $(this).attr('href') );
    if(target.length){
      event.preventDefault();
      $('html,body').animate({
        scrollTop: target.offset().top
      },duration);
    }
  });
}

$(document).ready(function() {
  smoothScroll(300);
});
