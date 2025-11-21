$(function () {
  $(".gift_box a").css("background-color", "rgba(255, 255, 255, 0)");
  $(".gift_box a").hover(
    function () {
      let i = $(this).index();
      console.log(i);
      $(this).removeClass("on");
      $(this).siblings().addClass("on");
      $(".gift_box_price>ul").eq(i).css({ display: "block" });
    },
    function () {
      $(".gift_box a").removeClass("on");
      $(".gift_box_price>ul").css({ display: "none" });
    }
  );
});
