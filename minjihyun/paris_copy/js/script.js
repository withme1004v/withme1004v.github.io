//메인 비주얼  배너
var swiper1 = new Swiper(".mySwiper1", {
  watchSlidesProgress: true,
  slidesPerView: 3,

  loop: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// 알바,창업 배너 슬라이드
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    //마우스가 들어갈때 오토플레이 > 일시정지 (autoplay안에 넣어야함)
    pauseOnMouseEnter: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//프로모션 슬라이드
var swiper3 = new Swiper(".mySwiper3", {
  watchSlidesProgress: true,
  slidesPerView: 4,
  spaceBetween: 20,

  loop: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
//제품 슬라이드

var swiper4 = new Swiper(".mySwiper4", {
  watchSlidesProgress: true,
  slidesPerView: 5,
  spaceBetween: 30,

  loop: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
