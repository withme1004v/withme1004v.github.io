//스크롤이벤트
$(function () {
  $(window).on("wheel", function () {
    let ht = $(window).scrollTop();

    //console.log(e.originalEvent.deltaY);
    let delta = event.wheelDelta;
    //마우스를 내리면 -120 마우스를 올리면 120
    console.log(delta);
    if (delta > 0) {
      $(".header_inner").addClass("on");
      if (ht == 0) {
        $(".header_inner").removeClass("on");
      }
    } else {
      $(".header_inner").removeClass("on");
    }
  });
});

//모바일 메뉴
$(".menu_btn").click(function () {
  $(".header_mo").addClass("on");
  $(".con_wrap").css({ display: "none" });
  $(this).hide();
});
$(".close_btn").click(function () {
  $(".header_mo").removeClass("on");
  $(".con_wrap").css({ display: "block" });
  $(".menu_btn").show();
});
