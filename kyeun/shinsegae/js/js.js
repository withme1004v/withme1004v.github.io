
$(function(){

  $(".gnb li").hover(function(){
    let i = $(this).index();
    $(this).find("a").removeClass("on1").addClass("on");
    $(".bg").css("opacity", "1");
    $(".sub>li").removeClass("on");
    $(".sub>li").eq(i).addClass("on")
    $(".menuwrap").addClass("Hactive");

  },function(){
    $(this).find("a").removeClass("on").addClass("on1");
  });

  $(".sub>li>ul>li").hover(function(){
    $(this).find("a").removeClass("on1").addClass("on");
    $(".bg").css("opacity", "1");
    $(".sub>li>ul>li").removeClass("on");
    $(".sub>li>ul>li").eq(i).addClass("on")
 },function(){
    $(this).find("a").removeClass("on").addClass("on1");
  });

  $(".sub").hover(function(){
    $(".menuwrap").addClass("Hactive");
  })

  //menu에서 마우스가 이탈할 때 (이탈동작)
  $(".menu").mouseleave(function(){
    $(".bg").css("opacity", "0");
    $(".sub>li").removeClass("on");
    $(".menuwrap").removeClass("Hactive");
  });

    $("footer .link li").hover(function(){
    $(this).find("a").removeClass("on1").addClass("on");
 },function(){
    $(this).find("a").removeClass("on").addClass("on1");
  });

  //스크롤 구간
  $(window).scroll(function(){
    console.log($(this).scrollTop());

  //67초과면서 990미만
    if ($(this).scrollTop() > 67&& $(this).scrollTop() <=990){
     $(".menuwrap").removeClass("active").addClass("on");
      $(".menu .gnb>li>a").removeClass("scroll active");
      $(".sub>li>ul>li>a").removeClass("active");
      $(".menulogo").removeClass("on").css("opacity", "1");
      $(".bg").removeClass("scroll");
      $(".sub a").removeClass("scroll");
    }
    //990초과
    else if($(this).scrollTop() > 990){
      $(".menuwrap").removeClass("on").addClass("active");
      $(".menu .gnb>li>a").addClass("scroll active");
      $(".sub>li>ul>li>a").addClass("active");
      $(".bg").addClass("scroll");
      $(".sub a").addClass("scroll");
      $(".menulogo").addClass("on");
    }
    //
    else{
      $(".menuwrap").removeClass("on active");
      $(".menu .gnb>li>a").removeClass("scroll active");
      $(".sub>li>ul>li>a").removeClass("active");
      $(".menulogo").removeClass("on").css("opacity", "0"); 
      $(".bg").removeClass("scroll");
      $(".sub a").removeClass("scroll");
    }
   
  });

});



AOS.init({ offset:200 });