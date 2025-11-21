// nav
$(function () {
  let arr = [
    $("section").eq(0).offset().top,
    $("section").eq(1).offset().top,
    $("section").eq(2).offset().top,
    $("section").eq(3).offset().top,
  ];
  console.log(arr);

  $("nav ul li a").click(function (e) {
    e.preventDefault();
    let i = $(this).parent().index();
    $("html, body").animate({ scrollTop: arr[i] - 60 }, 1000);
  });

  //popup
  //열기
  $(".portfolio .con li a").click(function () {
    let i = $(this).parent().index();
    if (i >= 3) {
      $("#popup00 > div").css({ display: "none" });
      $("#popup00 > div")
        .eq(i - 3)
        .css({ display: "block" });
      $("body").css({ overflow: "hidden" });
      return false;
    }
  });
  // 나중에 클론페이지 없이 각 리스트마다 레이어팝업 뜨게 할때 활용!!!
  /* $(".portfolio .con li a").click(function (e) {
    e.preventDefault();
    let i = $(this).parent().index();
    
      $("#popup00 > div").css({ display: "none" });
      $("#popup00 > div")
        .eq(i)
        .css({ display: "block" });
      $("body").css({ overflow: "hidden" });
   
  }); */

  //닫기
  $(".btn_close").click(function (e) {
    e.preventDefault();
    $("#popup00 > div").css({ display: "none" });
    $("body").css({ overflow: "visible" });
  });

  // TOP 버튼
  window.onscroll = function () {
    let ht = document.documentElement.scrollTop;
    console.log(ht);
    if (ht > 1000) {
      document.getElementsByClassName("btn_top")[0].style.opacity = "1";
    } else {
      document.getElementsByClassName("btn_top")[0].style.opacity = "0";
    }
  };
  $(".btn_top").click(function (e) {
    e.preventDefault();
    $("html,body").animate({ scrollTop: "0" }, 800);
  });

  // popup TOP 버튼
  let pop_top = document.querySelectorAll(".pop");
  let btn_top1 = document.querySelector(".btn_top1");
  pop_top.forEach(function (value, index) {
    console.log(index);
    value.onscroll = function () {
      let ht = value.scrollTop;
      console.log(ht);
      if (ht > 300) {
        document.querySelector(".btn_top1").style.opacity = "1";
      } else {
        document.querySelector(".btn_top1").style.opacity = "0";
      }
    };
  });
  $(".btn_top1").click(function (e) {
    e.preventDefault();
    $(".pop").animate({ scrollTop: "0" }, 500);
  });
});
