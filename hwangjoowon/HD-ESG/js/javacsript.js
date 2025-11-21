let s4conLi = document.querySelectorAll(".contents li");
let s4contxtLi = document.querySelectorAll(".con_txt li");

//1280 밑 header
let btn = document.querySelectorAll(".side .btn>li p");
  let btnP = document.querySelectorAll(".side .btn>li");
      
      btn.forEach(function(v,k){
        v.onclick = function(){
          let bool4 = btnP[k].querySelector(".sub").classList.contains("on");
          btnP[k].querySelector(".sub").classList.remove("on");
          if(!bool4){
            btnP[k].querySelector(".sub").classList.add("on");
          }
        }
      });

function my3(){
  s4conLi.forEach(function(v){
    v.classList.remove("on");
    v.querySelector("h3").classList.remove("on");
  });
  s4contxtLi.forEach(function(v){
    v.style.display="none";
    v.style.opacity="0";
  });
}
s4conLi[0].classList.add("on");
s4contxtLi[0].style.opacity="1";
s4conLi[0].querySelector("h3").classList.add("on");
s4conLi.forEach(function(v,k){
  v.onmouseenter = function(){
    my3();
    this.classList.add("on");
    s4contxtLi[k].style.display="flex";
    s4contxtLi[k].style.opacity="1";
    v.querySelector("h3").classList.add("on");
  }
  v.onclick = function(){
    my3();
    this.classList.add("on");
    s4contxtLi[k].style.display="flex";
    s4contxtLi[k].style.opacity="1";
    s4contxtLi[k].style.zIndex="5";
    v.querySelector("h3").classList.add("on");
  }
})



AOS.init();