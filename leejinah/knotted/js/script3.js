$(function () {
  var swiper = new Swiper(".swiper-container", {
    pagination: ".swiper-pagination",
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev",
    slidesPerView: 4,
    paginationClickable: true,
    loop: true,
  });
  setInterval(function () {
    //   console.log(slideI);
    $(".main_visual ul").animate({ marginLeft: "-1620px" }, 500, function () {
      $(".main_visual ul li").eq(0).appendTo(".main_visual ul");
      $(".main_visual ul").css({ marginLeft: "0" });
    });
  }, 2000);

  $(".owl-carousel").owlCarousel({
    loop: true,
    items: 1,
    margin: 0,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2000,
  });
});
