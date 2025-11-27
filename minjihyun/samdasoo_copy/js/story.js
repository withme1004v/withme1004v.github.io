//KOR버튼
$(".kor").click(function (e) {
  e.preventDefault();
  $(".lan_inner").stop().slideToggle(500);
});

//AOS애니메이션
AOS.init();
