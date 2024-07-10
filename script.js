$(document).ready(function () {
  $(".home").owlCarousel({
    stagePadding: 10,
    items: 1,
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    navText: [
      "<i class='fa fa-caret-left'></i>",
      "<i class='fa fa-caret-right'></i>",
    ],
  });

  $(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      items: 3,
      loop: true,
      margin: 10,
      dots: false,
      nav: true,
      smartSpeed: 900,
      navText: [
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>",
      ],
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        768: {
          items: 3,
        },
      },
    });
  });
});
