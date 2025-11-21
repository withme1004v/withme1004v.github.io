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