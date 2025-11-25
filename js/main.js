let list = document.querySelectorAll(".wrap ul li");
let thumbht = document.querySelector(".wrap ul li .thumb").clientHeight;
list.forEach(function (v, k) {
  v.querySelector(".thumbImg").onmouseenter = function () {
    let imght = v.querySelector(".thumbImg img").clientHeight;
    console.log(imght);
    let ht = imght - thumbht;
    if (imght <= 1500) {
      v.querySelector(".thumbImg img").style.transition = "5s";
    } else if (imght <= 3000) {
      v.querySelector(".thumbImg img").style.transition = "10s";
    } else {
      v.querySelector(".thumbImg img").style.transition = "15s";
    }
    v.querySelector(".thumbImg img").style.transform = `translateY(${-ht}px)`;
  };
  v.querySelector(".thumbImg").onmouseleave = function () {
    v.querySelector(".thumbImg img").style.transform = `translateY(0px)`;
  };
});
