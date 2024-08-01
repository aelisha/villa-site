function menu() {
  document.addEventListener("DOMContentLoaded", function () {
    const menuTrigger = document.querySelector(".menu-trigger");
    const menu = document.querySelector(".menu");
    const menuItems = document.querySelectorAll(".menu li a");

    menuTrigger.addEventListener("click", function () {
      menu.classList.toggle("open");
    });

    menuItems.forEach(function (item) {
      item.addEventListener("click", function () {
        menu.classList.remove("open");
      });
    });
  });
}
menu();

function deal() {
  document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".nav-item");
    const infos = document.querySelectorAll(".property-info");
    const images = document.querySelectorAll(".property-img");
    const extras = document.querySelectorAll(".property-extra");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const target = button.getAttribute("data-target");

        // Remove active class
        buttons.forEach((btn) => btn.classList.remove("nav-active"));
        // Add active class
        button.classList.add("nav-active");

        // Hide all property
        infos.forEach((info) => (info.style.display = "none"));
        images.forEach((img) => (img.style.display = "none"));
        extras.forEach((extra) => (extra.style.display = "none"));

        // Show the targeted property
        document.getElementById(`${target}-info`).style.display = "block";
        document.getElementById(`${target}-img`).style.display = "block";
        document.getElementById(`${target}-extra`).style.display = "block";
      });
    });

    // Initialize default active content
    document.getElementById("apartment-info").style.display = "block";
    document.getElementById("apartment-img").style.display = "block";
    document.getElementById("apartment-extra").style.display = "block";
  });
}
deal();

// sliders
$(document).ready(function () {
  $(".home").owlCarousel({
    stagePadding: 10,
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
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
