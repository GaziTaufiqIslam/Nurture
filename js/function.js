$(window).scroll(function () {
  var wScroll= $(this).scrollTop();
  var winH = $(window).height();

  if(wScroll > winH) {
    $('.navbar').addClass('show');
    $('.navbar').removeClass('hiddenNav');
  }
  else {
    $('.navbar').removeClass('show');
    $('.navbar').addClass('hiddenNav');
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
  smoothScroll(500);
  $("#input-mail").on("keypress", function() {
    $("#submit").addClass("bounce").one('animationend', function() {
      $("#submit").removeClass("bounce");} );
  });
  $(".player").on("click", function(){

    var $this=$(this),
        $audio=$('audio')[0];

    if($audio.paused===false) {
      $audio.pause();
      $this.removeClass('playing')
      $this.addClass('paused');
    }
    else {
      $audio.play();
      $this.addClass('playing');
      $this.removeClass('paused')

    }
  });
});
