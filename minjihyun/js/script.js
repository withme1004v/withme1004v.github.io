$(document).ready(function () {
  $("#fullpage").fullpage({
    autoScrolling: true,
    // scrollHorizontally: true,
    anchors: ["home", "about", "work", "contact"],
    responsiveWidth: 1024,
    scrollingSpeed: 1000,

    afterLoad: function (anchorLink, index) {
      $("[data-aos]").removeClass("aos-animate");

      // 현재 섹션만 애니메이션 실행
      $(".section")
        .eq(index - 1)
        .find("[data-aos]")
        .addClass("aos-animate");
    },
  });
});

//랜딩페이지 커버 메인 별 애니메이션
const path = document.querySelector("#path1");
const img = document.querySelector("#partyImg");

// SVG 경로의 총 길이를 구합니다.
const pathLength = path.getTotalLength();

// 이미지가 경로를 따라 움직이게 할 함수
function animateImage() {
  let progress = 0;

  // 애니메이션 주기
  function move() {
    progress += 0.003; // 한 번의 애니메이션에서 이동할 비율 애니메이션 속도 조절
    if (progress > 1) progress = 0; // 경로 끝에 도달하면 처음으로 되돌아갑니다.

    // 경로에서 현재 위치에 대한 좌표를 구합니다.
    const point = path.getPointAtLength(progress * pathLength);

    // 경로 상의 좌표 (x, y)로 이미지를 이동
    img.style.left = `${point.x - img.width / 2}px`; // 이미지의 중심을 경로에 맞추기 위해 -img.width/2
    img.style.top = `${point.y - img.height / 2}px`; // 이미지의 중심을 경로에 맞추기 위해 -img.height/2

    // 계속 애니메이션을 반복
    requestAnimationFrame(move);
  }

  move();
}

animateImage(); // 애니메이션 시작

//AOS애니메이션
AOS.init();

//work 스와이퍼 슬라이드
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
