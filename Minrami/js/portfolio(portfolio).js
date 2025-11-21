$(function () {
  // screen hover event start

  $(".first_rect").hover(
    function () {
      let i = $(this).find("img").height();
      $(this)
        .find("img")
        .css("top", -(i - 306) + "px");
    },
    function () {
      $(this).find("img").css("top", "0");
    }
  );
  $(".second_rect").hover(
    function () {
      let i = $(this).find(".rect").find("img").height();
      console.log(i);
      $(this)
        .find(".rect")
        .find("img")
        .css("top", -(i - 242) + "px");
    },
    function () {
      $(this).find(".rect").find("img").css("top", "0");
    }
  );
  $(".thied_rect").hover(
    function () {
      let i = $(this).find(".rect").find("img").height();
      console.log(i);
      $(this)
        .find(".rect")
        .find("img")
        .css("top", -(i - 214) + "px");
    },
    function () {
      $(this).find(".rect").find("img").css("top", "0");
    }
  );
  // screen hover event end

  // page scroll event start
  var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    //effect: "fade",
    slidesPerView: 1,
    spaceBetween: 0,
    loop: false,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  // page scroll event end
});
