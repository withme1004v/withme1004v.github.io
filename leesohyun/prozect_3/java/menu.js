let sub = document.querySelector(".submenu");
let gnb = document.querySelectorAll(".menu ul li");
let lnb = document.querySelectorAll(".lnb>ul>li"); 

 gnb.forEach(function (value, index) {
     value.addEventListener("mouseenter", function () { 
       sub.classList.add("on");
     });
     value.addEventListener("mouseleave", function () {
       sub.classList.remove("on");
     });
   });
 lnb.forEach(function (value, index) {
     value.addEventListener("mouseenter", function () {
       sub.classList.add("on");
       let x = gnb[index].querySelector("a");
       x.classList.add("on","actvie");
     });
     value.addEventListener("mouseleave", function () {
       sub.classList.remove("on");
       let x = gnb[index].querySelector("a");
       x.classList.remove("on","actvie");
     });
   });