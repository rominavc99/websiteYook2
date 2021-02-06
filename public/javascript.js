

var h = jQuery("header");
jQuery(window).scroll(function() {
  var windowpos = jQuery(window).scrollTop();
  if (windowpos >= 5) {
    h.addClass("stick");
  } else {
    h.removeClass("stick");
  }
});



