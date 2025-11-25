let sub = document.querySelectorAll(".sub");
let subUL = document.querySelectorAll(".sub>ul");
let gnb = document.querySelectorAll(".menu>li");
function myfnc() {
  sub.forEach(function (v, k) {
    v.style.height = 0 + "px";
    v.classList.remove("on");
  });

  document.querySelector(".head").style.height = 80 + "px";
}
gnb.forEach(function (v, k, allitem) {
  v.onmouseenter = function () {
    try {
      let ht = sub[k].querySelector("ul").offsetHeight;
      gnb[k].querySelector(".sub").style.height = ht + "px";
      gnb[k].querySelector(".sub").classList.add("on");
      document.querySelector(".head").style.backgroundColor = "rgba(255, 255, 255, 0.9)";
      document.querySelector(".head").style.height = 440 + "px";
    } catch (error) {
      document.querySelector(".head").style.height = 80 + "px";
    }
  };
  v.onmouseleave = function () {
    myfnc();
  };
});
document.querySelector(".head ul").onmouseenter = function () {
  gnb.forEach(function (v, k) {
    v.querySelector("a").classList.add("on");
  });
  document.querySelector(".head").style.backgroundColor = "#fff";
};
document.querySelector(".head").onmouseleave = function () {
  myfnc();
  gnb.forEach(function (v, k) {
    v.querySelector("a").classList.remove("on");
  });
};


const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
      }
    });

    