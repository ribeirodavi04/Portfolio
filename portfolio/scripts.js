$(document).ready(function () {
  $(window).scroll(function () {
    $(".navbar").toggleClass("navbar-light bg-light shadow-sm", $(this).scrollTop() > 200);
  });

  //efeito de tecla na section de inicio
  $(".typed-text-output").each(function () {
    var typed_strings = $(".typed-text").text();
    new Typed(this, {
      strings: typed_strings.split(", "),
      typeSpeed: 100,
      backSpeed: 20,
      smartBackspace: false,
      loop: true,
    });
  });

  //coloca uma animação estilo "fade-in up" "e fade-out down" na section sobre mim e projetos
  $(window).scroll(function () {
    
    $('.animated').each(function () {
      var sectionAnimated = $(this).offset().top;
      var windowHeight = $(window).height();

      if ($(window).scrollTop() + windowHeight > sectionAnimated) {
        $(this).css({
          opacity: 1,
          transform: 'translateY(0)'
        });
      } else {
        $(this).css({
          opacity: 0,
          transform: 'translateY(100px)'
        });
      }
    });
  });
});