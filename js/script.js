$(function () {

  new WOW().init();

});

$(function () {

  $("#work").magnificPopup({

    delegate: "a",
    gallery: {
      enabled: true
    },
    type: "image"

  });

});

$(function () {

  $("#team-members").owlCarousel({

    autoplay: true,
    autoplayHoverPause: true,
    items: 3,
    loop: true,
    smartSpeed: 700,
    responsive: {

      0: {

        items: 1

      },

      480: {

        items: 2

      },

      768: {

        items: 3

      },

    }

  });

});

$(function () {

  $("#customers-testimonials").owlCarousel({

    autoplay: true,
    autoplayHoverPause: true,
    items: 1,
    loop: true,
    smartSpeed: 700

  });

});

$(function () {

  $(".counter").counterUp({

    delay: 10,
    time: 2000

  });

});

$(function () {

  $("#clients-list").owlCarousel({

    autoplay: true,
    autoplayHoverPause: true,
    items: 6,
    loop: true,
    smartSpeed: 700,
    responsive: {

      0: {

        items: 1

      },

      480: {

        items: 3

      },

      768: {

        items: 5

      },

      992: {

        items: 6

      }

    }

  });

});

$(function () {

  $(window).scroll(function () {

    if ($(this).scrollTop() < 50) {

      $("nav").removeClass("vesco-top-nav");
      $("#back-to-top").fadeOut();

    } else {

      $("nav").addClass("vesco-top-nav");
      $("#back-to-top").fadeIn();
    }

  });

});

$(function () {

  $("a.smooth-scroll").click(function (event) {

    event.preventDefault();

    var section = $(this).attr("href");

    $("html, body").animate({

      scrollTop: $(section).offset().top - 64

    }, 1250, "easeInOutExpo");

  });

});


$(function () {

  $(".navbar-collapse ul li a").on("click touch", function () {

    $(".navbar-toggler").click();

  });

});
