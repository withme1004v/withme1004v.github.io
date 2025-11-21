$(function () {
  // aos start
  AOS.init({
    offset: 120,
    duration: 1000,
    once: true,
  });
  // aos end

  // scroll down color change event start
  $(window).scroll(function () {
    let scrollht = $(window).scrollTop();
    if (scrollht > 500) {
      $(".scrolldown_btn img:first").css("opacity", "1");
      $(".scrolldown_btn img:last").css("opacity", "0");
    } else {
      $(".scrolldown_btn img:first").css("opacity", "0");
      $(".scrolldown_btn img:last").css("opacity", "1");
    }
  });
  // scroll down color change event end

  // maincontent hover event start
  $(".main_item li").hover(
    function () {
      $(this).css({
        backgroundColor: "#bf1e2e",
        top: "-10px",
        left: "-10px",
        boxShadow: "10px 15px 20px rgba(0, 0, 0,0.19)",
      });
      $(this).find(".main_icon").find("img:first").css("opacity", "0");
      $(this).find(".main_icon").find("img:last").css("opacity", "1");
      $(this).find("h2").css("color", "#fff");
      $(this).find("p").css("color", "rgba(255,255,255,0.6)");

      let window_width = $(window).width();
      if (window_width < 1024) {
        $(this).css({
          backgroundColor: "transparent",
          top: "0px",
          left: "0px",
          boxShadow: "none",
        });
        $(this).find(".main_icon").find("img:first").css("opacity", "1");
        $(this).find(".main_icon").find("img:last").css("opacity", "0");
        $(this).find("h2").css("color", "#000");
        $(this).find("p").css("color", "#939393");
        $(this).find("a").css("color", "#000");
      }
    },
    function () {
      $(this).css({
        backgroundColor: "transparent",
        top: "0px",
        left: "0px",
        boxShadow: "none",
      });
      $(this).find(".main_icon").find("img:first").css("opacity", "1");
      $(this).find(".main_icon").find("img:last").css("opacity", "0");
      $(this).find("h2").css("color", "#000");
      $(this).find("p").css("color", "#939393");
    }
  );
  // maincontent hover event end

  // brandcontent hover event start
  $(".brand_item li").hover(
    function () {
      let i = $(this).index();
      $(".brand_item li").css({
        backgroundColor: "transparent",
        left: "-60px",
        boxShadow: "none",
      });
      $(".brand_item li")
        .find(".brand_icon")
        .find("img:first")
        .css("opacity", "1");
      $(".brand_item li")
        .find(".brand_icon")
        .find("img:last")
        .css("opacity", "0");
      $(".brand_item li").find(".brand_desc").find("h2").css("color", "#000");
      $(".brand_item li").find(".brand_desc").find("p").css("color", "#939393");
      $(".brand_item li").find(".brand_arrow").css("opacity", "0");
      $(this).css({
        backgroundColor: "#bf1e2e",
        left: "-50px",
        boxShadow: "10px 15px 20px rgba(0, 0, 0,0.19)",
      });
      $(this).find(".brand_icon").find("img:first").css("opacity", "0");
      $(this).find(".brand_icon").find("img:last").css("opacity", "1");
      $(this).find(".brand_desc").find("h2").css("color", "#fff");
      $(this).find(".brand_desc").find("p").css("color", "#fff");
      $(this).find(".brand_arrow").css("opacity", "1");
      $(".main_brand_con").css(
        "backgroundImage",
        "url(images/main_brand_img_" + (i + 1) + ".jpg)"
      );
    },
    function () {}
  );
  function init(n) {
    current = n;
    setTimeout(function () {
      $(".brand_item li")
        .eq(current)
        .css({ backgroundColor: "#bf1e2e", left: "-50px" });
      $(".brand_item li")
        .eq(current)
        .find(".brand_icon")
        .find("img:first")
        .css("opacity", "0");
      $(".brand_item li")
        .eq(current)
        .find(".brand_icon")
        .find("img:last")
        .css("opacity", "1");
      $(".brand_item li")
        .eq(current)
        .find(".brand_desc")
        .find("h2")
        .css("color", "#fff");
      $(".brand_item li")
        .eq(current)
        .find(".brand_desc")
        .find("p")
        .css("color", "#fff");
      $(".brand_item li").eq(current).find(".brand_arrow").css("opacity", "1");
    });
  }
  init(0);
  // brandcontent hover event end

  // history slide event start

  let left_width = $(".history_item .left").width();
  console.log(left_width);
  $(".swiper-slide:not(.swiper-slide-active) .history_item_top").hover(
    function () {
      let i = $(this).parent().parent().index();
      console.log(i);
      $(".swiper-slide").eq(i).find(".history_item_top h2").addClass("active");
      $(".swiper-slide").eq(i).find(".history_item_top").addClass("circle");
      $(".swiper-slide").eq(i).find(".history_icon img:last").addClass("red");
      $(".swiper-slide")
        .eq(i)
        .find(".history_item_top .line")
        .addClass("line_width");
    },
    function () {
      $(
        ".swiper-slide:not(.swiper-slide-active) .history_item_top h2"
      ).removeClass("active");
      $(
        ".swiper-slide:not(.swiper-slide-active) .history_item_top .line"
      ).removeClass("line_width");
      $(
        ".swiper-slide:not(.swiper-slide-active) .history_item_top"
      ).removeClass("circle");
      $(
        ".swiper-slide:not(.swiper-slide-active) .history_icon img"
      ).removeClass("red");
    }
  );

  $(".swiper-slide").eq(0).find(".history_item_top h2").addClass("active");
  $(".swiper-slide").eq(0).find(".history_item_top").addClass("circle");
  $(".swiper-slide").eq(0).find(".history_icon img:last").addClass("red");
  $(".swiper-slide")
    .eq(0)
    .find(".history_item_top .line")
    .addClass("line_width");

  var swiper = new Swiper(".mySwiper", {
    speed: 1000,
    direction: "horizontal",
    slidesPerView: "auto",
    spaceBetween: 0,
    centeredSlides: false,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        // 뷰포트 너비가 768px 이상인 경우
      },
      1024: {
        // 뷰포트 너비가 1024px 이상인 경우
        slidesOffsetBefore: 20,
      },
      1280: {
        slidesOffsetBefore: left_width,
      },
    },
    on: {
      slideChange: function () {
        $(".history_item_top h2").removeClass("active");
        $(".history_item_top .line").removeClass("line_width");
        $(".history_item_top").removeClass("circle");
        $(".history_icon img").removeClass("red");
        $(".swiper-slide")
          .eq(this.realIndex)
          .find(".history_item_top h2")
          .addClass("active");
        $(".swiper-slide")
          .eq(this.realIndex)
          .find(".history_item_top")
          .addClass("circle");
        $(".swiper-slide")
          .eq(this.realIndex)
          .find(".history_icon img:last")
          .addClass("red");
        $(".swiper-slide")
          .eq(this.realIndex)
          .find(".history_item_top .line")
          .addClass("line_width");
        var currentIndex = swiper.activeIndex;

        // 네 번째 슬라이드일 때 다음 버튼을 비활성화합니다.
        if (currentIndex === 3) {
          swiper.navigation.nextEl.classList.add("swiper-button-disabled");
        } else {
          // 다른 슬라이드에서는 다음 버튼을 활성화합니다.
          swiper.navigation.nextEl.classList.remove("swiper-button-disabled");
        }
      },
      slideChangeTransitionEnd: function () {
        $(".history_item .left").css("opacity", "0.5");
      },
      slideChangeTransitionStart: function () {
        $(".history_item .left").css("opacity", "0");
      },
    },
  });
  // history slide event end

  //news slide event start
  let window_width = $(window).width();
  var swiper2 = new Swiper(".mySwiper2", {
    direction: "horizontal",
    slidesPerView: 3,
    spaceBetween: 20,
    centeredSlides: false,
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 55,
      },
    },
  });
  //news slide event end
});
