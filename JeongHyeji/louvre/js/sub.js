//nav
//열기
$(".pop_Menu").addClass("active");
$("#navi_view").click(function (e) {
  e.preventDefault();
  $("#navi").removeClass("active");
  $(".navi2").css({ display: "block" });
  if ($("#navi").hasClass("active")) {
    $("html, body").css("overflow", "visible");
  } else {
    $("html, body").css("overflow", "hidden");
  }
});

//닫기
$("#close").click(function (e) {
  e.preventDefault();
  $("#navi").addClass("active");
  $(".navi2").css({ left: "-100%" });
  $("html, body").css("overflow", "visible");
});

// navi2
$(".navi2").css({ left: "-100%" });
$(".gnb ul li").click(function (e) {
  e.preventDefault();
  let i = $(this).index();
  console.log(i);
  if ($(this).find("a").hasClass("on") == false) {
    $(".navi2")
      .eq(i)
      .animate({ left: "680px" }, 300, function () {
        $(this).css({ zIndex: "8" });
      });
    $(".navi2")
      .eq(i)
      .siblings()
      .css({ zIndex: "1" })
      .animate({ left: "0" }, 300);
    $(".gnb ul li a").removeClass("on");
    $(".gnb ul li").eq(i).find("a").addClass("on");
  } else {
    $(".gnb ul li a").removeClass("on");
    $(".navi2").eq(i).css({ zIndex: "1" }).animate({ left: "0" }, 300);
  }
});

// TOP 버튼(자바스크립트 버전)
/* window.onscroll = function () {
  let ht = document.documentElement.scrollTop;
  console.log(ht);
  if (ht > 50) {
    document.getElementsByClassName("btn_top")[0].style.opacity = "1";
  } else {
    document.getElementsByClassName("btn_top")[0].style.opacity = "0";
  }
};
document.getElementsByClassName("btn_top")[0].onclick = function () {
  document.documentElement.scrollTop = "0";
}; */

$(function () {
  // TOP 버튼
  window.onscroll = function () {
    let ht = document.documentElement.scrollTop;
    console.log(ht);
    if (ht > 50) {
      document.getElementsByClassName("btn_top")[0].style.opacity = "1";
    } else {
      document.getElementsByClassName("btn_top")[0].style.opacity = "0";
    }
  };
  $(".btn_top").click(function (e) {
    e.preventDefault();
    $("html,body").animate({ scrollTop: "0" }, 800);
  });
});
