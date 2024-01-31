(function ($) {
  "use strict";

  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".navbar").addClass("navbar-light bg-light shadow-sm");
    } else {
      $(".navbar").removeClass("navbar-light bg-light shadow-sm");
    }
  });

  if ($(".typed-text-output").length == 1) {
    var typed_strings = $(".typed-text").text();
    var typed = new Typed(".typed-text-output", {
      strings: typed_strings.split(", "),
      typeSpeed: 100,
      backSpeed: 20,
      smartBackspace: false,
      loop: true,
    });
  }
})(jQuery);
