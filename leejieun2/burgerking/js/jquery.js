$(function(){
    $(".submenu").slideUp(500);

    $(".menu ul li").hover(function(){
        $(".submenu").stop().slideDown(500);
    },function(){
        $(".submenu").stop().slideUp(500);
    });

    $(".submenu").hover(function(){
        $(".submenu").stop().slideDown(500);
    },function(){
        $(".submenu").stop().slideUp(500);
    });
}); 