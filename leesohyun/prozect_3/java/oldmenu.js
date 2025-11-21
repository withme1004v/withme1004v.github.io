let baby = document.getElementsByClassName("baby_menu")[0];
let kid = document.getElementsByClassName("baby_menu2")[0];
let btnbg = document.querySelectorAll(".obtnli")
btnbg[0].classList.add("on");
kid.style.display = "none";
function Bbtn(){
    baby.style.display="flex";
    kid.style.display = "none";
    btnbg[1].classList.remove("on");
    btnbg[0].classList.add("on");
}
function Kbtn(){
    baby.style.display="none";
    kid.style.display = "flex";
    btnbg[0].classList.remove("on");
    btnbg[1].classList.add("on");
}
