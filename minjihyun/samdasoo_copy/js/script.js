//스크롤이벤트

$(function () {
  let sections = $("section");

  $(window).scroll(function () {
    sections.each(function (k, v) {
      let secTop = $(this).offset().top;
      //scrollTop 메서드
      let ht = $(window).scrollTop();
      //윈도우 스크롤바 탑의 좌표
      console.log(ht);
      if (ht >= secTop - 100) {
        if (k == 0) {
          //첫번째
          $(".logo img").attr("src", "./images/logo.png");
          $(".open_btn").css({
            backgroundImage: "url(./images/menu_b.png)",
          });
          $(".lan > a").css({ color: "#000" });
          $(".samdasoo").css("opacity", "1");
        } else if (k == 1) {
          //두번째
          $(".logo img").attr("src", "./images/foot_logo.png");
          $(".open_btn").css({
            backgroundImage: "url(./images/menu_w.png)",
          });
          $(".lan > a").css({ color: "#fff" });
        } else if (k == 2) {
          //세번째
          $(".logo img").attr("src", "./images/foot_logo.png");
          $(".open_btn").css({
            backgroundImage: "url(./images/menu_w.png)",
          });

          //물병 흐려지기
          if (ht >= secTop + $(window).height() / 2) {
            $(".samdasoo").css("opacity", "0");
          }
        } else if (k == 3) {
          //네번째
          $(".logo img").attr("src", "./images/logo.png");
          $(".open_btn").css({
            backgroundImage: "url(./images/menu_b.png)",
          });
          $(".lan > a").css({ color: "#000" });
        }
      }
    });
  });
});

//KOR버튼
$(".kor").click(function (e) {
  e.preventDefault();
  $(".lan_inner").stop().slideToggle(500);
});

$(function () {
  // 메뉴 열기
  $(".open_btn").on("click", function () {
    $(".menu_inner").addClass("on");
  });

  // 메뉴 닫기
  $(".close_btn").on("click", function () {
    $(".menu_inner").removeClass("on");
    $(this).css("transform", "rotate(45deg)");
  });
});
//AOS
AOS.init();
