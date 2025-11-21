$(function(){
    $(".menu1, .menu2, .menu3, .menu4").css("display","none");
    $(".head ul>li").eq(1).hover(function(){
        $(".head ul>li").eq(1).find("a").addClass("on");
       $(".menu1").stop().slideDown(1000);
    }, function(){
        $(".head ul >li a").removeClass();
        $(".menu1").stop().slideUp(1000);
    });
    $(".menu1").hover(function(){
        $(".head ul >li a").removeClass();
        $(".head ul>li").eq(1).find("a").addClass("on");
        $(".menu1").stop().slideDown(1000);
    },function(){
        $(".head ul >li a").removeClass();
        $(".menu1").stop().slideUp(1000);
    });

    $(".head ul>li").eq(3).hover(function(){
        $(".head ul>li").eq(3).find("a").addClass("on");
       $(".menu2").stop().slideDown(1000);
    }, function(){
        $(".head ul >li a").removeClass();
        $(".menu2").stop().slideUp(1000);
    });
    $(".menu2").hover(function(){
        $(".head ul >li a").removeClass();
        $(".head ul>li").eq(3).find("a").addClass("on");
        $(".menu2").stop().slideDown(1000);
    },function(){
        $(".head ul >li a").removeClass();
        $(".menu2").stop().slideUp(1000);
    });

    $(".head ul>li").eq(4).hover(function(){
        $(".head ul>li").eq(4).find("a").addClass("on");
       $(".menu3").stop().slideDown(1000);
    }, function(){
        $(".head ul >li a").removeClass();
        $(".menu3").stop().slideUp(1000);
    });
    $(".menu3").hover(function(){
        $(".head ul >li a").removeClass();
        $(".head ul>li").eq(4).find("a").addClass("on");
        $(".menu3").stop().slideDown(1000);
    },function(){
        $(".head ul >li a").removeClass();
        $(".menu3").stop().slideUp(1000);
    });

    $(".head ul:nth-child(2) li").eq(2).hover(function(){
        $(".menu4").stop().slideDown(500);
    }, function(){
        $(".menu4").stop().slideUp(500);
    });
    $(".menu4").hover(function(){
        $(".menu4").stop().slideDown(500);        
    },function(){
        $(".menu4").stop().slideUp(500);
    });
});