$(function () {
  var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    allowTouchMove: false,
    watchSlidesProgress: true,
  });
  let pause = true;
  /*$(".btn").on("click", function () {
    if (pause == true) {
      $(".btn img").attr("src", "images/play.svg");
      swiper.autoplay.stop();
    } else {
      $(".btn img").attr("src", "images/pause.svg");
      swiper.autoplay.start();
    }
    pause = !pause;
  });*/
  $(".btn").on("click", function (e) {
    let el = e.target;
    console.log(el);
    if (el && $(el).is("img") && pause) {
      swiper.autoplay.stop();
      const activeNavItem = $(".mySwiper").find(
        ".swiper-pagination-bullet-active"
      );
      activeNavItem.addClass("on");
      $(".btn img").attr("src", "images/play.svg");
    } else {
      swiper.autoplay.start();
      const activeNavItem = $(".mySwiper").find(
        ".swiper-pagination-bullet-active"
      );
      activeNavItem.removeClass("on");
      $(".btn img").attr("src", "images/pause.svg");
    }
    pause = !pause;
  });

  let i = true;
  $(".foot_menu li:last a").on("click", function (e) {
    event.preventDefault();
    if (i == true) {
      $(".family_bg").css({ height: "150px" });
      $(this).addClass("rota");
    } else {
      $(".family_bg").css({ height: "0px" });
      $(this).removeClass("rota");
    }
    i = !i;
  });
  AOS.init();
  // $(".gnb li").hover(function () {
  //   $(".bg").css("opacity", "1");
  // });
  $(".foot_menu > li").each(function (i, v) {
    //console.log(v);
    $(v).hover(
      function () {
        $(".foot_menu >li> a").removeClass("on");
        $(".foot_menu >li").eq(i).find("a").removeClass("on1").addClass("on");
      },
      function () {
        $(".foot_menu >li >a").removeClass("on1");
        $(".foot_menu >li").eq(i).find("a").removeClass("on").addClass("on1");
      }
    );
  });
  /*$(".gnb li").each(function (i, v) {
    //console.log(v);
    $(v).hover(
      function () {
        $(".bg").css("opacity", "1");
        $(".subwrap .inner").eq(i).find("ul").css("opacity", "1");
        $(".gnb li a").removeClass("on");
        $(".gnb li").eq(i).find("a").removeClass("on1").addClass("on");
      },
      function () {
        $(".bg").css("opacity", "0");
        $(".subwrap .inner ul").css("opacity", "0");
        $(".gnb li a").removeClass("on");
        $(".gnb li").eq(i).find("a").removeClass("on").addClass("on1");
      }
    );
  });*/

  $(".gnb li").hover(
    function () {
      let i = $(this).index();
      $(".subwrap").eq(i).stop().fadeIn();
    },
    function () {
      let i = $(this).index();
      $(".subwrap").eq(i).stop().fadeOut();
    }
  );
  $(".subwrap").hover(
    function () {
      $(this).stop().show();
    },
    function () {
      $(this).stop().fadeOut();
    }
  );
  $(window).scroll(function () {
    var ht = $(document).scrollTop();
    if (ht > 0) {
      $("header .headTop .logoInner").css("display", "none");
    } else {
      $("header .headTop .logoInner").css("display", "block");
    }
    if (ht >= 900) {
      $(".logo_bg").css({ filter: "none" });
      $(".gnb li a").css({ color: "#000" });
      $(".gnb_bg").css("backgroundColor", "#fff");
      $(".gnb li").addClass("scroll");
      $(".sub > li a ").css({ color: "#000" });
      $(".subwrap").addClass("on");
      $(".subwrap .inner").addClass("on");
    } else {
      $(".logo_bg").css({ filter: "brightness(100)" });
      $(".gnb li a").css({ color: "#fff" });
      $(".gnb_bg").css("backgroundColor", "transparent");
      $(".gnb li").removeClass("scroll");
      $(".sub > li a ").css({ color: "#fff" });
      $(".subwrap").removeClass("on");
      $(".subwrap .inner").removeClass("on");
    }
  });

  $(".read").hover(
    function () {},
    function () {}
  );
  $(".box").hover(
    function () {
      $(this).find("img").css({ transform: "scale(1.1)" });
    },
    function () {
      $(this).find("img").css({ transform: "scale(1)" });
    }
  );
  $(".bot_head").hover(
    function () {
      $(this).find("img").css({ transform: "scale(1.1)" });
    },
    function () {
      $(this).find("img").css({ transform: "scale(1)" });
    }
  );
  $(".family_list > li").each(function (i, v) {
    //console.log(v);
    $(v).hover(
      function () {
        $(".family_list >li> a").removeClass("on");
        $(".family_list >li").eq(i).find("a").removeClass("on1").addClass("on");
      },
      function () {
        $(".family_list >li >a").removeClass("on1");
        $(".family_list >li").eq(i).find("a").removeClass("on").addClass("on1");
      }
    );
  });
});
