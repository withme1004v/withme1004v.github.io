$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".top_scroll").show();
    } else {
      $(".top_scroll").hide();
    }
  });
  $(".top_scroll").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 400);
    return false;
  });
});
