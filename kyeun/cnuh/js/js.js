$(function(){


AOS.init({});

$(".gnb>li").mouseenter(function(){
  $(".gnb>li>a").addClass("on");
  $(".topwrap").addClass("on");
  $(".subbg").addClass("on");
  $(".sub").removeClass("on");
  $(this).find(".sub").addClass("on");
  $(".toplogo>img").attr("src", "images/logo_on.png");
  $(".right .login a").addClass("on");
  $(".src>a>img").attr("src", "images/icon_search_on.png");
});


$(".top").mouseleave(function(){
  $(".gnb>li>a").removeClass("on");
  $(".topwrap").removeClass("on");
  $(".subbg").removeClass("on");
  $(".sub").removeClass("on");
  $(".toplogo>img").attr("src", "images/logo_white.png");
  $(".right .login a").removeClass("on");
  $(".src>a>img").attr("src", "images/icon_search_white.png");
});

$(".resv li").mouseenter(function(){
  let i = $(this).index()+1;
  console.log(i);
  $(this).eq(i).attr("src", "images/main_icon_0"+i+"_on.svg");
});

function my(){
  $(".top").mouseleave(function(){
    $(".gnb>li>a").addClass("on");
    $(".topwrap").addClass("on");
    $(".toplogo>img").attr("src", "images/logo_on.png");
    $(".right .login a").addClass("on");
    $(".src>a>img").attr("src", "images/icon_search_on.png");
  });
  
}
$(window).scroll(function(){
  
if($(this).scrollTop() > 70){
    $(".gnb>li>a").addClass("on");
    $(".topwrap").addClass("on");
    $(".toplogo>img").attr("src", "images/logo_on.png");
    $(".right .login a").addClass("on");
    $(".src>a>img").attr("src", "images/icon_search_on.png");
    my();
    $(".hdmenu .menu img").attr("src","images/menu_on.svg");
  $(".topwrap").addClass(on);
  }
  else{
    $(".gnb>li>a").removeClass("on");
    $(".topwrap").removeClass("on");
    $(".toplogo>img").attr("src", "images/logo_white.png");
    $(".right .login a").removeClass("on");
    $(".src>a>img").attr("src", "images/icon_search_white.png");  
    $(".hdmenu .menu img").attr("src","images/menu.svg");
    $(".topwrap").removeClass(on);
    my().hide();
  }
});

var swiper = new Swiper(".mySwiper", {
  loop:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

$(".hdmenu .menu").click(function(){
  $(".hdgnbwrap").show();
  $(".section").hide();
  $(".foot").hide();
  $(".close").show();
  $(".topwrap").show();
  $(".topwrap").addClass("on");
  $(".toplogo>img").attr("src", "images/logo_on.png");

});

$(".hdmenu .close").click(function(){
  $(".close").hide();
  $(".hdgnbwrap").hide();
  $(".topwrap").removeClass("on");
  $(".toplogo>img").attr("src", "images/logo_white.png");
  $(".section").show();
  $(".foot").show();
});

$(".close").hover(function(){
  $(this).addClass("on");
});

$(".hdgnb .right>ul>li").click(function(){
  $(this).find(".submenu").toggle();


});

});