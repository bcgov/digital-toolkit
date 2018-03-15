// https://davidwalsh.name/javascript-debounce-function
function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// https://www.quirksmode.org/js/cookies.html
function createCookie(name, value, days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    var expires = "; expires=" + date.toGMTString();
  } else var expires = "";
  document.cookie = name + "=" + value + expires + "; path=/";
}
function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
function eraseCookie(name) {
  createCookie(name, "", -1);
}

var surveyIsShown = false;

// Hack the annoying "back to top" thing because we can.
$(".back-to-top").css("visibility", "hidden");
var backToTopShown = false;

var efficientScrollFn = debounce(function() {
  // Back to top
  if (!backToTopShown) {
    $(".back-to-top").css("visibility", "inherit");
    backToTopShown = true;
  }

  // Survey box
  if (
    $(window).scrollTop() >= 399 &&
    surveyIsShown === false &&
    !readCookie("dontShowSurveyOffering")
  ) {
    $("#highlightKeywordFloatingBar").fadeIn(400, function() {
      surveyIsShown = true;
    });
  }
}, 250);

window.addEventListener("scroll", efficientScrollFn); // Oh so performant...

// Event listeners for the Survey Box
$(".closeHighlightKeywordFloatingBar i, .btn-feedback.btn-no").click(function(
  e
) {
  e.preventDefault();
  $("#highlightKeywordFloatingBar").fadeOut();
});

$("input.doNotShowDidYouFind").click(function() {
  if ($(this).is(":checked")) {
    // user don't wanna see no stink'n survey offer box
    // don't show it for 2 months + 9 days
    createCookie("dontShowSurveyOffering", "yes", 69);
  } else {
    eraseCookie("dontShowSurveyOffering");
  }
});
