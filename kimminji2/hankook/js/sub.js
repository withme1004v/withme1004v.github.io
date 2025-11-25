$(document).ready(function () {
  // GNB 메뉴 호버 서브메뉴
  $(".submenu").slideUp(500);

  $(".menu ul li").hover(
    function () {
      $(".submenu").stop().slideDown(500);
    },
    function () {
      $(".submenu").stop().slideUp(500);
    }
  );

  $(".submenu .lnb > ul > li").hover(
    function () {
      let i = $(this).index();
      $(".submenu").stop().slideDown(500);
      $(".menu ul li").eq(i).find("a").addClass("on");
    },
    function () {
      $(".submenu").stop().slideUp(500);
      $(".menu ul li a").removeClass("on");
    }
  );

  // 스크롤 시 로고 크기 및 이미지 변경
  $(window).on("scroll", function () {
    const logo = document.querySelector("header .logo");
    if (!logo) return;

    const logoImg = logo.querySelector("img");
    if (!logoImg) return;

    if (window.scrollY > 50) {
      logo.classList.add("shrink");
      logoImg.src = "./img/logo-scroll.png";
      logoImg.onerror = () => {
        logoImg.src =
          "https://group.hankook.com/default/img/onepixel/images/common/logo-default.png";
      };
    } else {
      logo.classList.remove("shrink");
      logoImg.src =
        "https://group.hankook.com/default/img/onepixel/images/common/logo-default.png";
    }
  });

  // 작업공정 스와이퍼
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 100,
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
    },
  });
  // 위로가기 버튼
  const topBtn = document.querySelector(".top-button");
  if (topBtn) {
    topBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});

// 나타나기
const floating = document.querySelector(".floating-buttons");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    floating.classList.add("show");
  } else {
    floating.classList.remove("show");
  }
});
