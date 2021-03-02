$(document).ready(function () {
  $('.feedback-human').slick({
    arrows: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-people',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
        },
      },
    ],
  });
  $('.slider-people').slick({
    arrows: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    focusOnSelect: true,
    variableWidth: true,
    asNavFor: '.feedback-human',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: true,
          slidesToShow: 3,
        },
      },
    ],
  });
});
