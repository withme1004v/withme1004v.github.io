//언어
$(".lan").click(function () {
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
    $(".header_top .lan > a").addClass("on");
    $(".links > a").addClass("on");
    $("nav.menu > ul > li > a").addClass("on");
    $(".header_top .lan img").addClass("on");
    $(".links > a > img").addClass("on");
  },
  function () {
    $(this).removeClass("on");
    $(".logo img").attr("src", "./images/sulwhasoo_white_logo_220902.png");
    $(".header_top .lan > a").removeClass("on");
    $(".links > a").removeClass("on");
    $("nav.menu > ul > li > a").removeClass("on");
    $(".header_top .lan img").removeClass("on");
    $(".links > a > img").removeClass("on");
  }
);
//비주얼 슬라이드
var swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
