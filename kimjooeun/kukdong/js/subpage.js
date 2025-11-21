//------------------- subpage 1 -------------------

window.onscroll = function () {
  let ht = document.documentElement.scrollTop;
  // console.log(ht);
  if (ht >= 500) {
    document.querySelector(".tit nav").classList.add("on");
  } else {
    document.querySelector(".tit nav").classList.remove("on");
  }
};

//------------------- subpage 2 -------------------

//이미지넣기
document.querySelectorAll(".title2").forEach(function (v, k) {
  v.style.backgroundImage = "url(./images/sub2_banner_" + (k + 1) + ".jpg)";
});

document.querySelectorAll(".list label")[0].classList.add("on");
document.querySelectorAll(".desc li")[0].classList.add("on");

// 클래스 remove
function removeOn() {
  document.querySelectorAll(".list label").forEach(function (v, k) {
    v.classList.remove("on");
  });
  document.querySelectorAll(".desc li").forEach(function (v, k) {
    v.classList.remove("on");
  });
}

document.querySelectorAll(".list label").forEach(function (v, k) {
  v.onclick = function () {
    removeOn();
    document.querySelector(".title").innerText = v.textContent;
    v.classList.add("on");
    document.querySelectorAll(".desc li")[k].classList.add("on");
  };
});
