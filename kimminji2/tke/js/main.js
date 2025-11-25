var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  centeredSlides: true, // 가운데 정렬
  loop: true, // 반복 구조
  initialSlide: 1, // 첫 번째 슬라이드를 가운데로 보이게
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1059: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    480: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },
});

// 스크롤 헤더로고 변경
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  const logo = document.querySelector(".logo img");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
      logo.src = "./img/Thyssenkrupp-Elevator-New-Logo.png";
    } else {
      header.classList.remove("scrolled");
      logo.src = "./img/Thyssenkrupp-Elevator-New-Logo2.png";
    }
  });
});

// 클릭 위로 이동

document.addEventListener("DOMContentLoaded", function () {
  const topButton = document.querySelector(".top-button");

  topButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // 부드럽게 이동
    });
  });
});

// 햄버거

// let hambuger = true;
// document.querySelector(".hamburger").onclick = function () {
//   if (hambuger) {
//     document.querySelector(".mobilegnb").style.display = "block";
//   } else {
//     document.querySelector(".mobilegnb").style.display = "none";
//   }
//   hambuger = !hambuger;
// };

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobilegnb");

  hamburger.addEventListener("click", function () {
    // 햄버거 버튼에 active 클래스 추가/제거 → X 아이콘
    hamburger.classList.toggle("active");

    // 모바일 메뉴 열고 닫기
    if (mobileMenu.style.display === "block") {
      mobileMenu.style.display = "none";
    } else {
      mobileMenu.style.display = "block";
    }
  });

  // 바깥 클릭 시 메뉴 닫기 (선택 사항)
  document.addEventListener("click", function (e) {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
      hamburger.classList.remove("active");
      mobileMenu.style.display = "none";
    }
  });
});
