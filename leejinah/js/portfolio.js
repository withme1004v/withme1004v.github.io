$(function () {
  // let me = $(".page3").offset().top ;
  let me = $(window).scrollTop();

  $(window).scroll(function () {
    let me = $(this).scrollTop();
    console.log(me);
  });

  $(".page3_tex .about>a").click(function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: "2786" }, 500);
  });
  $(".page3_tex .portfolio>a").click(function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: "3735" }, 500);
  });
  $(".page3_tex .other>a").click(function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: "6575" }, 500);
  });
  $(".page3_tex .contact>a").click(function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: "7513" }, 500);
  });
  
});
