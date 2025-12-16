//언어
$(".lan > a").click(function (e) {
  e.preventDefault();
  $(".lan_inner").toggleClass("on");
  $(".lan img").toggleClass("active");
});

//메뉴
$(".menu > ul > li").hover(
  function () {
    let ht = $(this).find(".sub > ul").height();
    console.log(ht);
    $(this).find(".sub").height(ht).addClass("show");
  },
  function () {
    $(".menu > ul > li").find(".sub").height(0).removeClass("show");
  }
);

$("header").hover(
  function () {
    $(this).addClass("on");
    $(".logo img").attr("src", "./images/sulwhasoo_logo-amber_250224.png");
  },
  function () {
    $(this).removeClass("on");
    $(".logo img").attr("src", "./images/sulwhasoo_white_logo_220902.png");
  }
);
//비주얼 슬라이드
var swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper_btn.next",
    prevEl: ".swiper_btn.prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
    draggable: true,
  },
});
//플레이 정지/재생
document.querySelector(".stop").onclick = function () {
  swiper.autoplay.stop();
  $(this).hide();
  $(".play").show();
};
document.querySelector(".play").onclick = function () {
  swiper.autoplay.start();
  $(this).hide();
  $(".stop").show();
};

//설화수 추천 슬라이드
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,

  breakpoints: {
    720: {
      slidesPerView: 3,
    },
  },

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  navigation: {
    nextEl: ".swiper2_btn.next",
    prevEl: ".swiper2_btn.prev",
  },
});
// AOS애니메이션
AOS.init();
//모바일 서브메뉴
$(".hamburger_btn").click(function () {
  $(".mobile_con").addClass("on");
  $(".go_top_btn").hide();
  $("html").addClass("on");
  $("body").addClass("on");
});
$(".close_btn").click(function () {
  $(".mobile_con").removeClass("on");
  $(".go_top_btn").show();
  $("html").removeClass("on");
  $("body").removeClass("on");
});

$(".mobile_sub_con").click(function () {
  const inner = $(this).find(".mobile_sub_inner");

  if ($(this).hasClass("on")) {
    inner.css("max-height", 0);
    $(this).removeClass("on");
  } else {
    inner.css("max-height", inner[0].scrollHeight + "px");
    $(this).addClass("on");
  }
});

$(".kor").click(function () {
  $(".mobile_lan_inner").show();
});
$(".mobile_lan_close_btn").click(function () {
  $(".mobile_lan_inner").hide();
});

$(".mobile_lan_inner_body li").click(function () {
  $(".mobile_lan_inner_body li").removeClass("on");
  $(this).addClass("on");
});
