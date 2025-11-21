$(document).ready(function () {
  $(".sub_menu").slideUp(0);
  $(".main_menu").mouseenter(function () {
    $(this).find("+ .sub_menu").stop().slideDown("fast");
    $(this)
      .parent()
      .mouseleave(function () {
        $(this).find(".sub_menu").stop().slidUp("fast");
      });
  });
});
