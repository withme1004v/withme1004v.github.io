//메뉴
// $(".menu > li").hover(function () {});
$(".menu > ul").hover(
  function () {
    $(".sub_bg").stop().slideDown(300);
    $(".fc_btn").addClass("on");
  },
  function () {
    $(".sub_bg").stop().slideUp(300);
  }
);

$(".sub_bg").hover(
  function () {
    $(this).stop().slideDown(300);
  },
  function () {
    $(this).stop().slideUp(300);
    $(".fc_btn").removeClass("on");
  }
);
// AOS
AOS.init();
