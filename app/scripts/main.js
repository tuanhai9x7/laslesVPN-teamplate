// Slick slider
$(document).ready(function () {
  $(".customer-list").slick({
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fal fa-long-arrow-alt-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fal fa-long-arrow-alt-right' aria-hidden='true'></i></button>",
    customPaging: function (slider, i) {
      return '<a href="#"></a>';
    },
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: false,
          arrows: false
        },
      },
    ],
  });
});

const headerToggle = document.querySelector(".header-toggle");
const headerMenu = document.querySelector(".header-list");
const expandClass = "is-expand";
headerToggle.addEventListener("click", () => {
  headerMenu.classList.add(expandClass);
});
window.addEventListener("click", (e) => {
  if (!headerMenu.contains(e.target) && !e.target.matches(".header-toggle")) {
    headerMenu.classList.remove(expandClass);
  }
});
