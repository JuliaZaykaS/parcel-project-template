$(document).ready(function () {
  $('.feedback-human').slick({
    arrows: false,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-people',
  });
  $('.slider-people').slick({
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // centerMode: true,
    focusOnSelect: true,
    asNavFor: '.feedback-human',
  });
});
