$(function () {
  $(".gift_box a").hover(
    function () {
      $(".gift_box_bg").addClass("on");
      $(this).find("img").css("zIndex", "20");
    },
    function () {
      let i = $(this).index();
      $(".gift_box a")
        .find("img")
        .css("zIndex", i + 1);
    }
  );
});
