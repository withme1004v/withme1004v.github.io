//마우스커서
// let cursor = document.querySelector(".customPointer");
// document.onmousemove = function (e) {
//   //보여지는 브라우저 안에서의 좌표값
//   cursor.style.top = e.clientY + "px";
//   cursor.style.left = e.clientX + "px";
// };

//메뉴
// $(".menu > li").hover(function () {});
$(".menu > ul").hover(
  function () {
    $(".sub_bg").stop().slideDown(300);
    $(".fc_btn").addClass("on");
  },
  function () {
    $(".sub_bg").stop().slideUp(300);
  }
);

$(".sub_bg").hover(
  function () {
    $(this).stop().slideDown(300);
  },
  function () {
    $(this).stop().slideUp(300);
    $(".fc_btn").removeClass("on");
  }
);

//비주얼 슬라이드
var swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

let centerImg = [
  "./images/new-c-signature-item-00-1.png",
  "./images/c-beverage-item-00.png",
  "./images/c-coffee-item-00.png",
  "./images/new_c-cookie-item-00.png",
];

let menuLeft = document.querySelectorAll(
  ".menuCon > div:first-child > ul > li"
);
let menuRight = document.querySelectorAll(
  ".menuCon > div:nth-child(2) > ul > li"
);
//배경 이미지 z-index 설정
menuLeft[0].style.zIndex = "2";
menuRight[0].classList.add("on");
document.querySelector("nav ul li:first-child a").classList.add("on");

let menu = document.querySelectorAll("nav  ul li");
menu.forEach(function (v, k) {
  v.onclick = function (e) {
    e.preventDefault();

    menuLeft.forEach(function (v) {
      v.classList.remove("on");
      v.style.zIndex = "0";
    });

    //(1) 모든 nav a에서 .on 제거
    document.querySelectorAll("nav ul li a").forEach(function (a) {
      a.classList.remove("on");
    });

    //(2) 현재 클릭한 li 안의 a에 .on 추가
    const currentA = v.querySelector("a");
    if (currentA) {
      currentA.classList.add("on");
    }

    menuRight.forEach(function (v) {
      v.classList.remove("on");
    });
    let prev = menuLeft[k].previousElementSibling;
    if (prev) {
      prev.style.zIndex = "1";
    }
    menuLeft[k].style.zIndex = "2";
    menuLeft[k].classList.add("on");
    menuRight[k].classList.add("on");
    //센터 이미지 변경
    let menuImg = document.querySelector(".menuCon > p  img");
    // let menuImgSrc = menuImg.getAttribute("src");
    menuImg.setAttribute("src", centerImg[k]);
  };
});

//글자 흐르기
$(function () {
  $(".marquee_wrap").marquee({
    duration: 20000, // 속도
    gap: 10, // 간격
    delayBeforeStart: 500, // 시작 delay값
    direction: "left", // 방향
    duplicated: true, // 선택 영역 복제
    // pauseOnHover: , // hover시 일시중지 여부
    startVisible: true,
  });
});
