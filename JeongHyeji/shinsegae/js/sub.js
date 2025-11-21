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

// TOP 버튼(자바스크립트 버전)
/* window.onscroll = function () {
  let ht = document.documentElement.scrollTop;
  console.log(ht);
  if (ht > 50) {
    document.getElementsByClassName("btn_top")[0].style.opacity = "1";
  } else {
    document.getElementsByClassName("btn_top")[0].style.opacity = "0";
  }
};
document.getElementsByClassName("btn_top")[0].onclick = function () {
  document.documentElement.scrollTop = "0";
}; */

$(function () {
  // TOP 버튼
  window.onscroll = function () {
    let ht = document.documentElement.scrollTop;
    console.log(ht);
    if (ht > 50) {
      document.getElementsByClassName("btn_top")[0].style.opacity = "1";
    } else {
      document.getElementsByClassName("btn_top")[0].style.opacity = "0";
    }
  };
  $(".btn_top").click(function (e) {
    e.preventDefault();
    $("html,body").animate({ scrollTop: "0" }, 800);
  });
});
