
//s2 web swiper 오류
var swiper = new Swiper(".mySwiper", {
  //direction: "vertical",
  //적용시 오류
  speed: 1000,
  enabled: true,
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  //forceToAxis: true,
  mousewheel: {
    releaseOnEdges: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//s3 logo swiper
var swiper = new Swiper(".mySwiper1", {
  loop:true,
  slidesPerView: 4,
  spaceBetween: 0,
  centeredSlides: true,
  effect:"coverflow",
  coverflowEffect: {
    slideShadows: false,
    scale: .9,
    rotate: -17,
    stretch: 10,
    depth: 200,
    modifier:.6,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



//s3 modal 팝업창
//modal을 가져옵니다.
const modals = document.getElementsByClassName('modal');
//Modal을 띄우는 클래스 이름을 가져옵니다.
const btns = document.getElementsByClassName('btn-open-popup');
// Modal을 닫는 close 클래스를 가져옵니다.
var spanes = document.getElementsByClassName("close");
var funcs = [];

// Modal을 띄우고 닫는 클릭 이벤트를 정의한 함수
function Modal(num) {
  return function() {
    // 해당 클래스의 내용을 클릭하면 Modal을 띄웁니다.
    btns[num].onclick =  function() {
        modals[num].style.display = "block";
        console.log(num);
    };

     // <span> 태그(X 버튼)를 클릭하면 Modal이 닫습니다.
     spanes[num].onclick = function() {
      modals[num].style.display = "none";
  };
  };
}

// 원하는 Modal 수만큼 Modal 함수를 호출해서 funcs 함수에 정의합니다.
for(var i = 0; i < btns.length; i++) {
  funcs[i] = Modal(i);
}
 
// 원하는 Modal 수만큼 funcs 함수를 호출합니다.
for(var j = 0; j < btns.length; j++) {
  funcs[j]();
}
 
// Modal 영역 밖을 클릭하면 Modal을 닫습니다.
window.onclick = function(event) {
  if (event.target.className == "modal") {
       event.target.style.display = "none";
  }
};




//스크롤링 부드럽게?
/* window.scroll({
  top:0,
  left:100,
  behavior:'smooth'
}); */
/*     window.scrollBy({
  top:100,
  left:100,
  behavior:'smooth',
}); */





//jquery 제이쿼리

//s0 gsap
const ani1 = gsap.timeline();
  ani1.to(".s0 .mainWord p:nth-child(1) img",{
    y: 0,
    duration: 1,
    delay:1.2,
  }).to(".s0 .mainWord p:nth-child(2) img",{
    y: 0,
    duration: 1,
  }).to(".s0 .mainWord p:nth-child(2) img",{
    duration: 5,
    rotate: 720,
    repeat: -1,
    ease: "linear",
  });

const ani2 = gsap.timeline();
  ani2.to(".s0 .leftWord p",{
    opacity: 0,
  },"t1").to(".s0 .mainWord p:nth-child(1)",{
    //xPercent: 50,
    scale: 1.7,
    x: 380,
    y: -120,
    //opacity: 0.5,
  },"t1").to(".s0 .mainWord p:nth-child(2)",{
    scale: 1.7,
    x: 500,
    y: -250,
    //opacity: 0.5,
  },"t1").to(".s0>p",{
    width: 700,
    height:800,
    opacity: 1,
  }).to(".s0>p",{
    backgroundImage: "linear-gradient(to bottom, #FF4040, transparent), url(../images/s0_bg.jpg)",
  });

  ScrollTrigger.create({
    animation: ani2,
    trigger: ".s0",
    //markers: true,
    end: "+=2000",
    pin:true,
    scrub:2,
    anticipatePin:1,
  });




//s3 logo, s4 character btn
$(".mySwiper1 #btn .swiper-button-next").hover(function(){
  $(".mySwiper1 #btn .swiper-button-next img").attr('src', 'images/s3&s4_arrow_right_Black.png');
},function(){
  $(".mySwiper1 #btn .swiper-button-next img").attr('src', 'images/s3&s4_arrow_right_Color.png');
});
$(".mySwiper1 #btn .swiper-button-prev").hover(function(){
  $(".mySwiper1 #btn .swiper-button-prev img").attr('src', 'images/s3&s4_arrow_left_Black.png');
},function(){
  $(".mySwiper1 #btn .swiper-button-prev img").attr('src', 'images/s3&s4_arrow_left_Color.png');
});


//s5 gsap
const ani3 = gsap.timeline();
  ani3.to(".s5 p.bg",{
    borderRadius: "1000 1000 0 0",
  }).to(".s5 p.bg",{
    width: 700,
  }).to(".s5 p.bg",{
    width: 0,
    height: 0,
    opacity: 0,
  });

  ScrollTrigger.create({
    animation: ani3,
    trigger: ".s5",
    markers: true,
    end: "+=2000",
    pin:true,
    scrub:2,
    anticipatePin:1,
  });


//페이지 이동시 해당 header 버튼 효과
$(window).scroll(function(){
  let s1Top = $("#s1").offset().top;
  let s1Bot = s1Top + $("#s1").height();
  let s2Top = $("#s2").offset().top;
  let s2Bot = s2Top + $("#s2").height();
  let s3Top = $("#s3").offset().top;
  let s3Bot = s3Top + $("#s3").height();
  let s4Top = $("#s4").offset().top;
  let s4Bot = s4Top + $("#s4").height();

  $("header .nav li a").removeClass("on");

  if($(this).scrollTop() >= s1Top-100 && $(this).scrollTop() < s1Bot-100){
    $("header .nav li:nth-child(1) a").addClass("on");
  }else if($(this).scrollTop() >= s2Top-100 && $(this).scrollTop() < s2Bot-100){
    $("header .nav li:nth-child(2) a").addClass("on");
  }else if($(this).scrollTop() >= s3Top-100 && $(this).scrollTop() < s3Bot-100){
    $("header .nav li:nth-child(4) a").addClass("on");
  }else if($(this).scrollTop() >= s4Top-100 && $(this).scrollTop() < s4Bot-50){
    $("header .nav li:nth-child(5) a").addClass("on");
  }else{
    $("header .nav li a").removeClass("on");
  }

  let s5Top = $("#s5").offset().top;
  let s5Bot = s5Top + $("#s5").height();



  if($(this).scrollTop() >= s5Top-50 && $(this).scrollTop() < s5Bot-50){
    $("header .nav li a").css({color:"#000"});
    $("header .nav li span").css({color:"#000"});
    $("header .nav li:nth-child(3) a img").attr("src","images/top_logo_black.png");
/*     $("header .nav li a").hover(function(){
      $(this).addClass("s5");
    },function(){
      $(this).removeClass("s5");
    }) */
  }else{
    $("header .nav li a").css({color:"#FF4040"});
    //$("header .nav li a").css("border-bottom","3px solid #FF4040");
    $("header .nav li span").css({color:"#FF4040"});
    $("header .nav li:nth-child(3) a img").attr("src","images/s0_top_logo.png");
  }

});