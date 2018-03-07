// https://davidwalsh.name/javascript-debounce-function
function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this, args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

// Hack the annoying "back to top" thing because we can.
$('.back-to-top').css('visibility', 'hidden');
var backToTopShown = false;

var efficientScrollFn = debounce(function () {
  if (!backToTopShown) {
    $('.back-to-top').css('visibility', 'inherit');
    backToTopShown = true;
  }
}, 250);

window.addEventListener('scroll', efficientScrollFn); // Oh so performant...
