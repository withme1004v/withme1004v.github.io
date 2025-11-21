$(function(){
  function my(){
    $("header").css({backgroundColor:"#fff"});
    $("header .nav>li").find(">a").css({color:"#222"});
    $("header .right li:nth-child(1) a img").attr("src","images/menu_icon_search_color.svg");
    $("header .right li:nth-child(2) a img").attr("src","images/menu_icon_en_color.svg");
    $("header .logo img").attr("src","images/menu_logo_color.svg");
  }
  function my2(){
    $("header").css({backgroundColor:"rgba(0, 0, 0, .2)"});
    $("header .nav>li").find(">a").css({color:"#fff"});
    $("header .right li:nth-child(1) a img").attr("src","images/menu_icon_search_w.svg");
    $("header .right li:nth-child(2) a img").attr("src","images/menu_icon_en_w.svg");
    $("header .logo img").attr("src","images/menu_logo_white.svg");
  }

  $("header .nav>li").hover(function(){
    my();
    $("header .head_bg").css({height:"290px"});
    $(this).find(">a").css({color:"#002569"});

  },function(){
    my2();
    $("header .head_bg").css({height:"0"});
  });

  $("header .right").hover(function(){
    my();
  },function(){
    my2();
  });

  $("header .logo").hover(function(){
    my();
  },function(){
    my2();
  });

   //1280 밑 헤더
   let bool = true;
   $(".hamburger-lines").click(function(){
     if(bool){
       $("#wrap").css({opacity:".2"});
       $(".line1").css({transform:"rotate(45deg)"}).css({backgroundColor:"#002569"});
       $(".line2").css({transform:"scaleY(0)"}).css({backgroundColor:"#002569"});
       $(".line3").css({transform:"rotate(-45deg)"}).css({backgroundColor:"#002569"});
       $(".side").css({transform:"translateX(0)"});
     }else{
       $("#wrap").css({opacity:"1"});
       $(".line1").css({transform:"rotate(0)"}).css({backgroundColor:"#fff"});
       $(".line2").css({transform:"scaleY(1)"}).css({backgroundColor:"#fff"});
       $(".line3").css({transform:"rotate(0)"}).css({backgroundColor:"#fff"});
       $(".side").css({transform:"translateX(100%)"});
     };
     bool=!bool;
   });



 //fullpage
  $('#fullpage').fullpage({
    verticalCentered: true,
    scrollBar: true,
    normalScrollElements: '.scrollable-element',
    afterLoad: function(origin, destination, direction) {
  if ($(".sec1").hasClass("active")) { 
    $.fn.fullpage.setScrollingSpeed(0); // 속도 조정
      $.fn.fullpage.setAllowScrolling(false);
      $("#section1").css("overflowY","scroll");
    
  } else {
      // 나머지 페이지는 다시 FullPage.js 사용
      $.fn.fullpage.setScrollingSpeed(1000);
      $.fn.fullpage.setAllowScrolling(true);
    }
  }
  });



  //top버튼 이동
  $(window).scroll(function() {
    if ($(this).scrollTop() > 500) {
    $('#MOVE_TOP_BTN').fadeIn();
    } else {
    $('#MOVE_TOP_BTN').fadeOut();
    }
  });
  $("#MOVE_TOP_BTN").click(function() {
  $('html, body').animate({
  scrollTop : 0
  }, 400);
  return false;
  });



  

});






