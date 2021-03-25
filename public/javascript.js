

var h = jQuery("header");
jQuery(window).scroll(function() {
  var windowpos = jQuery(window).scrollTop();
  if (windowpos >= 5) {
    h.addClass("stick");
  } else {
    h.removeClass("stick");
  }
});


var swiper = new Swiper('.blog-slider', {
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  mousewheel: {
    invert: false,
  },
  // autoHeight: true,
  pagination: {
    el: '.blog-slider__pagination',
    clickable: true,
  }
});
