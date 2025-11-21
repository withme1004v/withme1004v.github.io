$(function () {
  // images scroll event start
  $(".art_desc button, .art_img").click(function () {
    $(
      ".mySwiper, .mySwiper2, .mySwiper3, .mySwiper4, .mySwiper5, .mySwiper6"
    ).animate({ scrollTop: "963" }, 1000);
  });
  // images scroll event end

  // swiper contents slide event start
  var swiper = new Swiper(".mySwiper", {
    direction: "horizontal",
    //effect: "fade",
    slidesPerView: 1,
    spaceBetween: 0,
    loop: false,
    mousewheel: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper2 = new Swiper(".mySwiper2", {
    direction: "horizontal",
    //effect: "fade",
    slidesPerView: 1,
    spaceBetween: 0,
    loop: false,
    mousewheel: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper3 = new Swiper(".mySwiper3", {
    direction: "horizontal",
    //effect: "fade",
    slidesPerView: 1,
    spaceBetween: 0,
    loop: false,
    mousewheel: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper4 = new Swiper(".mySwiper4", {
    direction: "horizontal",
    //effect: "fade",
    slidesPerView: 1,
    spaceBetween: 0,
    loop: false,
    mousewheel: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper5 = new Swiper(".mySwiper5", {
    direction: "horizontal",
    //effect: "fade",
    slidesPerView: 1,
    spaceBetween: 0,
    loop: false,
    mousewheel: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper6 = new Swiper(".mySwiper6", {
    direction: "horizontal",
    //effect: "fade",
    slidesPerView: 1,
    spaceBetween: 0,
    loop: false,
    mousewheel: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  // swiper contents slide event end

  // swiper button event start
  $(".swiper-button-next, .swiper-button-prev").click(function () {
    $(
      ".mySwiper, .mySwiper2, .mySwiper3, .mySwiper4, .mySwiper5, .mySwiper6"
    ).scrollTop("0");
  });
  // swiper button event end

  // nav scroll event start
  $(".mySwiper").scroll(function () {
    let scroll = $(".mySwiper").scrollTop();
    if (scroll >= 50) {
      $("nav").css({ opacity: "0", visibility: "hidden" });
    } else {
      $("nav").css({ opacity: "1", visibility: "visible" });
    }
  });

  $(".mySwiper2").scroll(function () {
    let scroll = $(".mySwiper2").scrollTop();
    if (scroll >= 50) {
      $("nav").css({ opacity: "0", visibility: "hidden" });
    } else {
      $("nav").css({ opacity: "1", visibility: "visible" });
    }
  });

  $(".mySwiper3").scroll(function () {
    let scroll = $(".mySwiper3").scrollTop();
    if (scroll >= 50) {
      $("nav").css({ opacity: "0", visibility: "hidden" });
    } else {
      $("nav").css({ opacity: "1", visibility: "visible" });
    }
  });

  $(".mySwiper4").scroll(function () {
    let scroll = $(".mySwiper4").scrollTop();
    if (scroll >= 50) {
      $("nav").css({ opacity: "0", visibility: "hidden" });
    } else {
      $("nav").css({ opacity: "1", visibility: "visible" });
    }
  });

  $(".mySwiper5").scroll(function () {
    let scroll = $(".mySwiper5").scrollTop();
    if (scroll >= 50) {
      $("nav").css({ opacity: "0", visibility: "hidden" });
    } else {
      $("nav").css({ opacity: "1", visibility: "visible" });
    }
  });

  $(".mySwiper6").scroll(function () {
    let scroll = $(".mySwiper6").scrollTop();
    if (scroll >= 50) {
      $("nav").css({ opacity: "0", visibility: "hidden" });
    } else {
      $("nav").css({ opacity: "1", visibility: "visible" });
    }
  });
  // nav scroll event end

  //back to top button click event start
  let back = $("nav").offset().top;
  $(".back_to_top_button, .art_subimg span").click(function () {
    $(
      ".mySwiper, .mySwiper2, .mySwiper3, .mySwiper4, .mySwiper5, .mySwiper6"
    ).animate({ scrollTop: back }, 1000);
  });
  //back to top button click event end

  // nav li click event start
  $(".sub_nav ul li")
    .eq(0)
    .click(function () {
      $(".mySwiper").css("display", "block");
      $(".mySwiper2").css("display", "none");
      $(".mySwiper3").css("display", "none");
      $(".mySwiper4").css("display", "none");
      $(".mySwiper5").css("display", "none");
      $(".mySwiper6").css("display", "none");
      $(".click_category").css("display", "none");
    });

  $(".sub_nav ul li")
    .eq(1)
    .click(function () {
      $(".mySwiper").css("display", "none");
      $(".mySwiper2").css("display", "block");
      $(".mySwiper3").css("display", "none");
      $(".mySwiper4").css("display", "none");
      $(".mySwiper5").css("display", "none");
      $(".mySwiper6").css("display", "none");
      $(".click_category").css("display", "none");
    });

  $(".sub_nav ul li")
    .eq(2)
    .click(function () {
      $(".mySwiper").css("display", "none");
      $(".mySwiper2").css("display", "none");
      $(".mySwiper3").css("display", "block");
      $(".mySwiper4").css("display", "none");
      $(".mySwiper5").css("display", "none");
      $(".mySwiper6").css("display", "none");
      $(".click_category").css("display", "none");
    });

  $(".sub_nav ul li")
    .eq(3)
    .click(function () {
      $(".mySwiper").css("display", "none");
      $(".mySwiper2").css("display", "none");
      $(".mySwiper3").css("display", "none");
      $(".mySwiper4").css("display", "block");
      $(".mySwiper5").css("display", "none");
      $(".mySwiper6").css("display", "none");
      $(".click_category").css("display", "none");
    });

  $(".sub_nav ul li")
    .eq(4)
    .click(function () {
      $(".mySwiper").css("display", "none");
      $(".mySwiper2").css("display", "none");
      $(".mySwiper3").css("display", "none");
      $(".mySwiper4").css("display", "none");
      $(".mySwiper5").css("display", "block");
      $(".mySwiper6").css("display", "none");
      $(".click_category").css("display", "none");
    });

  $(".sub_nav ul li")
    .eq(5)
    .click(function () {
      $(".mySwiper").css("display", "none");
      $(".mySwiper2").css("display", "none");
      $(".mySwiper3").css("display", "none");
      $(".mySwiper4").css("display", "none");
      $(".mySwiper5").css("display", "none");
      $(".mySwiper6").css("display", "block");
      $(".click_category").css("display", "none");
    });
  // nav li click event end
});
