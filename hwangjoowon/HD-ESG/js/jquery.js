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
    $(".headM .hamburger-lines .line").css({backgroundColor:"#002569"});
  },function(){
    my2();
    $(".headM .hamburger-lines .line").css({backgroundColor:"#fff"});
  });

/*   $(".headM .hamburger-lines").hover(function(){
    my();
    $(".headM .hamburger-lines .line").css({backgroundColor:"#002569"});
  },function(){
    my2();
    $(".headM .hamburger-lines .line").css({backgroundColor:"#fff"});
  }); */

/*   if($(".side").css({transform:"translateX(0)"})){
    $(".headM .hamburger-lines .line").css({backgroundColor:"#002569"});
  };
 */
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

      /* let bool5 = $(".side").hasClass("on"); */
/*       $(".headM .side .btn>li p").click(function(){
        if($(".side").hasClass("on")===true){
          $(this).css("font-family", "InterB");
        }else{
          $(this).css("font-family", "InterSB");
        };
      }); */


  $(window).resize(function(){
    var deviceWidth = $(window).width();
    if (deviceWidth < 1300){
      $(".s1 > p").html('<img src="images/s1_line11.svg" alt="line">');
      $(".s2 > p").html('<img src="images/s2_line22.svg" alt="line">');
      $(".s3 > p").html('<img src="images/s3_line33.svg" alt="line">');
      $(".s4 > p").html('<img src="images/s4_line44.svg" alt="line">');
    }else if (deviceWidth < 1520) {
      $(".s1 > p").html('<img src="images/s1_line1.svg" alt="line">');
      $(".s2 > p").html('<img src="images/s2_line2.svg" alt="line">');
      $(".s3 > p").html('<img src="images/s3_line3.svg" alt="line">');
      $(".s4 > p").html('<img src="images/s4_line4.svg" alt="line">');
    }else{
      $(".s1 > p").html('<img src="images/s1_line.svg" alt="line">');
      $(".s2 > p").html('<img src="images/s2_line.svg" alt="line">');
      $(".s3 > p").html('<img src="images/s3_line.svg" alt="line">');
      $(".s4 > p").html('<img src="images/s4_line.svg" alt="line">');
    };
  });
  $(window).trigger("resize");


  $(".s5 .right li").each(function(){
    $(this).find(".lang span").eq(0).css({color:"#99FFAC"});

    $(".lang span").click(function(){
      $(".lang span").css({color:"#fff"});
      $(this).css({color:"#99FFAC"});
    });
  });

 

  $(".s5 .download > span").hover(function(){
    $(this).find("img").attr("src","images/s5 arrow_color.svg");
  },function(){
    $(this).find("img").attr("src","images/s5 arrow_w.svg");
  });



  //s5 스크롤이벤트
  $(window).scroll(function(){
    var
    h = $(document).scrollTop();
    offset = $(".s5 .right li:nth-child(1)").offset().top - (400);
    offset2 = $(".s5 .right li:nth-child(2)").offset().top - (400);
    offset3 = $(".s5 .right li:nth-child(3)").offset().top - (400);
    offset4 = $(".s5 .right li:nth-child(4)").offset().top - (400);
    offset5 = $(".s5 .right li:nth-child(5)").offset().top - (400);
    offset6 = $(".s5 .right li:nth-child(5)").offset().top - (20);
    
    if(h > offset && h < offset2) { //특정 div가 있는 곳을 지날 때
      $(".bg li").css({opacity:"0"});
      $(".bg1").css({opacity:"1"});
      $(".s5 .right li").css("background-color","rgba(255, 255, 255, .5)");
      $(".s5 .right li:nth-child(1)").css("background-color","rgba(255, 255, 255, 1)");
      $(".s5 .left").css({position:"fixed"});
    } else if(h > offset2 && h < offset3) {
      $(".s5").css({background:"none"});
      $(".bg li").css({opacity:"0"});
      $(".bg2").css({opacity:"1"});
      $(".s5 .right li").css("background-color","rgba(255, 255, 255, .5)");
      $(".s5 .right li:nth-child(2)").css("background-color","rgba(255, 255, 255, 1)");
      $(".s5 .left").css({position:"fixed"});
    } else if(h > offset3 && h < offset4) {
      $(".s5").css({background:"none"});
      $(".bg li").css({opacity:"0"});
      $(".bg3").css({opacity:"1"});
      $(".s5 .right li").css("background-color","rgba(255, 255, 255, .5)");
      $(".s5 .right li:nth-child(3)").css("background-color","rgba(255, 255, 255, 1)");
      $(".s5 .left").css({position:"fixed"});
    }  else if(h > offset4 && h < offset5) {
      $(".s5").css({background:"none"});
      $(".bg li").css({opacity:"0"});
      $(".bg4").css({opacity:"1"});
      $(".s5 .right li").css("background-color","rgba(255, 255, 255, .5)");
      $(".s5 .right li:nth-child(4)").css("background-color","rgba(255, 255, 255, 1)");
      $(".s5 .left").css({position:"fixed"});
    } else if(h > offset5 && h < offset6) {
      $(".s5").css({background:"none"});
      $(".bg li").css({opacity:"0"});
      $(".bg5").css({opacity:"1"});
      $(".s5 .right li").css("background-color","rgba(255, 255, 255, .5)");
      $(".s5 .right li:nth-child(5)").css("background-color","rgba(255, 255, 255, 1)");
      $(".s5 .left").css({position:"fixed"});
    } else{
      $(".bg li").css({opacity:"0"});
      $(".bg1").css({opacity:"1"});
      $(".s5 .right li").css("background-color","rgba(255, 255, 255, .5)");
      $(".s5 .right li:nth-child(1)").css("background-color","rgba(255, 255, 255, 1)");
      $(".s5 .left").css({position:"absolute"});
    }
  });


  
  

 //fullpage
  $('#fullpage').fullpage({
    navigation:true,
    verticalCentered: true,
    scrollBar: true,
    normalScrollElements: '.scrollable-element',
    afterLoad: function(origin, destination, direction) {
  if ($(".sec5").hasClass("active")) { 
    $.fn.fullpage.setScrollingSpeed(0); // 속도 조정
      $.fn.fullpage.setAllowScrolling(false);
      $("#section5").css("overflowY","scroll");
    
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



//자바스크립트인데 여기로 기재해야 첫번째 슬라이드 작동됨
 //s0 swiper
 let swiperLi = document.querySelectorAll(".mySwiper .swiper-wrapper .swiper-slide");
  var swiper = new Swiper(".mySwiper", {
    effect: "fade",
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    on: {
      slideChange: function(){
        for(let i=0; i<3; i++){
          swiperLi[i].querySelector("p.bg img").classList.remove("on");
          swiperLi[i].querySelector(".text h3").classList.remove("on");
          swiperLi[i].querySelector(".maintxt").classList.remove("on");
        }
        swiperLi[this.realIndex].querySelector("p.bg img").classList.add("on");
        swiperLi[this.realIndex].querySelector(".text h3").classList.add("on");
        swiperLi[this.realIndex].querySelector(".maintxt").classList.add("on");
      }
    }
  });
  

});





