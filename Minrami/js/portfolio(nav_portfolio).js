$(function () {
  // menu_item hover event start
  $(".menu_item li")
    .eq(0)
    .hover(
      function () {
        $(".menu_item_hover li").eq(0).css("left", "700px");
      },
      function () {
        $(".menu_item_hover li").eq(0).css("left", "2000px");
      }
    );
  $(".menu_item li")
    .eq(1)
    .hover(
      function () {
        $(".menu_item_hover li").eq(1).css("left", "700px");
      },
      function () {
        $(".menu_item_hover li").eq(1).css("left", "2000px");
      }
    );
  $(".menu_item li")
    .eq(2)
    .hover(
      function () {
        $(".menu_item_hover li").eq(2).css("left", "700px");
      },
      function () {
        $(".menu_item_hover li").eq(2).css("left", "2000px");
      }
    );
  $(".menu_item li")
    .eq(3)
    .hover(
      function () {
        $(".menu_item_hover li").eq(3).css("left", "700px");
      },
      function () {
        $(".menu_item_hover li").eq(3).css("left", "2000px");
      }
    );
  // menu_item hover event end

  // menu_btn click event start
  let menu_btn = true;
  $(".menu_btn_wrap").click(function () {
    if (menu_btn) {
      $(".drawer_menu").css({ height: "100vh", opacity: "1" });
      $(".menu_btn_wrap span").eq(0).addClass("bar1");
      $(".menu_btn_wrap span").eq(1).addClass("bar2");
      $(".menu_btn_wrap span").eq(2).addClass("bar3");
    } else {
      $(".drawer_menu").css({ height: "0px", opacity: "0" });
      $(".menu_btn_wrap span").eq(0).removeClass("bar1");
      $(".menu_btn_wrap span").eq(1).removeClass("bar2");
      $(".menu_btn_wrap span").eq(2).removeClass("bar3");
    }
    menu_btn = !menu_btn;
  });
  // menu_btn click event end
});
