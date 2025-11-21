$(function () {
  // con aos start
  AOS.init({
    offset: 120,
    duration: 500,
    easing: "ease-in",
  });
  // con aos end

  // gnb hover event start
  $(".top_gnb li").hover(
    function () {
      console.log("g");
      $("header .lnbwrap").css("height", "490px");
      $(".head_light .lnbwrap").css("height", "490px");
    },
    function () {
      $("header .lnbwrap").css("height", "0px");
      $(".head_light .lnbwrap").css("height", "0px");
    }
  );
  $(".top_lnb > ul > li").hover(
    function () {
      $("header .lnbwrap").css("height", "490px");
      $(".head_light .lnbwrap").css("height", "490px");
    },
    function () {
      $("header .lnbwrap").css("height", "0px");
      $(".head_light .lnbwrap").css("height", "0px");
    }
  );
  // gnb hover event end

  // gnb scroll event start
  window.onscroll = function () {
    let ht = document.documentElement.scrollTop;
    if (ht > 50) {
      $("header").css("visibility", "hidden").css("opacity", "0");
      $(".head_light").css("visibility", "visible").css("opacity", "1");
    } else {
      $("header").css("visibility", "visible").css("opacity", "1");
      $(".head_light").css("visibility", "hidden").css("opacity", "0");
    }
  };
  // gnb scroll event end

  // language click event start
  let btn1 = true;
  let ht1 = $(".language > li > .language_con").height();
  $(".language > li > .language_con").css({
    height: "0",
    overflow: "hidden",
  });
  console.log(ht1);
  $(".language > li svg path").click(function () {
    if (btn1) {
      $(this).addClass("on");
      $(".language > li > .language_con").css("height", ht1 + "px");
    } else {
      $(this).removeClass("on");
      $(".language > li > .language_con").css("height", "0px");
    }
    btn1 = !btn1;
  });
  // language click event end

  // menu_bar click event start
  let menu_bar = true;
  console.log(menu_bar);
  $(".menu_bar").click(function () {
    if (menu_bar) {
      $(".bar_top").addClass("on1");
      $(".bar_middle").addClass("on2");
      $(".bar_bottom").addClass("on3");
      $("nav").css("height", "100vh");
      $(".top_logo, .language, .top_desc, .top_sns").css("opacity", "0");
      $(".topmenu").css("visibility", "hidden");
      $("header").css("border-bottom", "none");
      $(".head_light").css("border-bottom", "none");
      $(".head_light").css("background", "transparent");
    } else {
      $(".bar_top").removeClass("on1");
      $(".bar_middle").removeClass("on2");
      $(".bar_bottom").removeClass("on3");
      $("nav").css("height", "0vh");
      $(".top_logo, .language, .top_desc, .top_sns").css("opacity", "1");
      $(".topmenu").css("visibility", "visible");
      $("header").css("border-bottom", "1px solid rgba(255, 255, 255, 0.3)");
      $(".head_light").css(
        "border-bottom",
        "1px solid rgba(255, 255, 255, 0.3"
      );
      $(".head_light").css("background", "#fff");
    }
    menu_bar = !menu_bar;
  });
  // menu_bar click event end

  // sub_lnb hover event start
  $(".brand li")
    .eq(0)
    .hover(
      function () {
        $(".sub_lnb > ul > li ul:first").css("visibility", "visible");
        $(".content").css("z-index", "-1");
      },
      function () {
        $(".sub_lnb > ul > li ul:first").css("visibility", "hidden");
        $(".content").css("z-index", "1");
      }
    );
  $(".brand li")
    .eq(1)
    .hover(
      function () {
        $(".sub_lnb > ul > li ul").eq(1).css("visibility", "visible");
        $(".content").css("z-index", "-1");
      },
      function () {
        $(".sub_lnb > ul > li ul").eq(1).css("visibility", "hidden");
        $(".content").css("z-index", "1");
      }
    );
  $(".sub_lnb > ul > li ul").hover(
    function () {
      $(this).eq(0).css("visibility", "visible");
      $(".content").css("z-index", "-1");
    },
    function () {
      $(this).eq(0).css("visibility", "hidden");
      $(".content").css("z-index", "1");
    }
  );
  $(".sub_lnb > ul > li ul").hover(
    function () {
      $(this).eq(1).css("visibility", "visible");
      $(".content").css("z-index", "-1");
    },
    function () {
      $(this).eq(1).css("visibility", "hidden");
      $(".content").css("z-index", "1");
    }
  );
  // sub_lnb hover event end

  // menu click event start

  $(".menu ul li").click(function () {
    let i = $(this).index();
    console.log(i);
    $(".menu ul li a").css({ background: "#fff", color: "#2c3e50" });
    $(".menu ul li")
      .eq(i)
      .find("a")
      .css({ background: "#2c3e50", color: "#fff" });
  });
  // menu click event end

  // product_desc hover event start
  $(".product ul li").hover(
    function () {
      $(this).find(".prd_desc").css("opacity", "1");
    },
    function () {
      $(".product ul li .prd_desc").css("opacity", "0");
    }
  );
  // product_desc hover event end
});
