// navigation slide-in
$(window).load(function() {
  $('.nav_slide_button').click(function() {
    $('.pull').slideToggle();
  });
});
// first-flexslider
$(window).load(function() {
  $('#firstSlider').flexslider({
    animation: "slide",
    directionNav: false,
    controlNav: true,
    touch: false,
    start: function() {
      $.waypoints('refresh');
    }
  });
});
// second-flexslider
$(window).load(function() {
  $('#secondSlider').flexslider({
    animation: "slide",
    directionNav: false,
    controlNav: false,
    touch: false,
  });
});
$('.prev, .next').on('click', function() {
  var href = $(this).attr('href');
  $('#secondSlider').flexslider(href)
  return false;
})
// waypoints
$(document).ready(function() {

  $('.wp1').waypoint(function() {
    $('.wp1').addClass('animated fadeInUp');
  }, {
    offset: '50%'
  });

  $('.wp2').waypoint(function() {
    $('.wp2').addClass('animated fadeInUp');
  }, {
    offset: '75%'
  });

  $('.wp3').waypoint(function() {
    $('.wp3').addClass('animated fadeInUpDelay');
  }, {
    offset: '90%'
  });

  $('.wp4').waypoint(function() {
    $('.wp4').addClass('animated fadeInUpDelay-1');
  }, {
    offset: '90%'
  });

  $('.wp5').waypoint(function() {
    $('.wp5').addClass('animated fadeInUpDelay-2');
  }, {
    offset: '90%'
  });

  $('.wp6').waypoint(function() {
    $('.wp6').addClass('animated fadeInUp');
  }, {
    offset: '70%'
  });

  $('.wp7').waypoint(function() {
    $('.wp7').addClass('animated fadeInUpDelay');
  }, {
    offset: '70%'
  });

  $('.wp8').waypoint(function() {
    $('.wp8').addClass('animated fadeInUpDelay-1');
  }, {
    offset: '70%'
  });

  $('.wp9').waypoint(function() {
    $('.wp9').addClass('animated fadeInUpDelay-2');
  }, {
    offset: '70%'
  });

  $('.wp10').waypoint(function() {
    $('.wp10').addClass('animated fadeInUp');
  }, {
    offset: '75%'
  });

});
// smooth scroll
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 2000);
        return false;
      }
    }
  });
});
// fancyBox
$(document).ready(function() {
  $(".various").fancybox({
    maxWidth: 800,
    maxHeight: 450,
    fitToView: false,
    width: '70%',
    height: '70%',
    autoSize: false,
    closeClick: false,
    openEffect: 'none',
    closeEffect: 'none'
  });
});
