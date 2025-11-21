$(function () {
  // submenu 스크립트

  let subMenu = document.querySelectorAll(".submenu");
  let gnb = document.querySelectorAll(".gnb ul li a");
  let lnb = document.querySelectorAll(".lnb");

  gnb.forEach(function (item, keys) {
    item.onmouseenter = function (e) {
      let j = Array.from(gnb).indexOf(e.target);
      function others(item) {
        return item !== j;
      }
      let otherItem = Array.from(subMenu).filter(others);
      otherItem.forEach(function (item) {
        item.style.height = "0px";
        item.style.opacity = "0";
      });

      lnb.forEach(function () {
        let subht = lnb[j].offsetHeight;
        console.log("j : " + j);
        subMenu[j].style.height = subht + "px";
        subMenu[j].style.opacity = "1";
        subMenu[j].classList.add("active2");
      });

      item.onmouseleave = function () {
        for (let i = 0; i <= 6; i++) {
          subMenu[i].style.height = 0 + "px";
          subMenu[j].classList.remove("active2");
        }
      };
    };
  });

  subMenu.forEach(function (item, keys) {
    item.onmouseenter = function (e) {
      let j = Array.from(subMenu).indexOf(e.target);
      lnb.forEach(function () {
        let subht = lnb[j].offsetHeight;
        console.log("subht : " + subht);
        subMenu[j].style.height = subht + "px";
        subMenu[j].style.opacity = "1";
        subMenu[j].classList.add("active2");
      });

      gnb[j].classList.add("on", "active");
    };

    item.onmouseleave = function (e) {
      for (let i = 0; i <= 6; i++) {
        subMenu[i].style.height = 0 + "px";
        subMenu[i].classList.remove("active2");
      }
      gnb[keys].classList.remove("on", "active");
    };
  });

  // visual
  const progressLine = $(".autoplay-progress p");
  var swiper1 = new Swiper(".mySwiper1", {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + 0 + (index + 1) + "</span>";
      },
    },
    on: {
      autoplayTimeLeft(s, time, progress) {
        console.log("this.realIndex" + this.realIndex);
        progressLine.eq(this.realIndex).addClass("on");
        progressLine.eq(this.realIndex).siblings().removeClass("on");
        $(".slogan .txt").eq(this.realIndex).find("p").addClass("active");
      },
      slideChange: function () {
        $(".slogan .txt p").removeClass("active");
        $(".slogan .txt").eq(this.realIndex).find("p").addClass("active");
      },
    },
  });
  // visual 재생/정지
  swiper1.autoplay.start();
  let play = $(".slogan .control_w ul li").eq(0).find("a");
  let play_status = true;
  play.click(function (e) {
    e.preventDefault();
    if (play_status) {
      swiper1.autoplay.stop();
      play.addClass("on");
    } else {
      swiper1.autoplay.start();
      play.removeClass("on");
    }
    play_status = !play_status;
  });

  // Art & Culture
  $(".art .content .text li").eq(0).addClass("on");
  var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      slideChange: function () {
        console.log("artthis.realIndex" + this.realIndex);
        $(".art .content .text>li").removeClass("on");
        $(".art .content .text>li").eq(this.realIndex).addClass("on");
      },
    },
  });

  // Shinsegae Brand
  $(".brand_bottom").find(".content:first").addClass("on");
  var swiperSubNum = $(".mySwiper3").find(".swiper-slide");
  var swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 3,
    loop: true,
    centeredSlides: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      slideChange: function () {
        let i = this.realIndex % 3;
        console.log("i : " + i);
        $(".brand_bottom>.content").removeClass("on");
        $(".brand_bottom>.content").eq(i).addClass("on");
      },
    },
  });
  $("#btn_prev,#btn_next,#btn_prev2,#btn_next2").hover(
    function () {
      $(this).find("svg").removeClass().addClass("on");
    },
    function () {
      $(this).find("svg").removeClass().addClass("on1");
    }
  );

  //popup
  //열기
  $("#popup_view").click(function (e) {
    e.preventDefault();
    $("#popup").css({ display: "block" });
  });

  //닫기
  $("#close").click(function (e) {
    e.preventDefault();
    $("#popup").css({ display: "none" });
  });
});
