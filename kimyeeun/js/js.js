$(function(){


  $('#fullpage').fullpage({
    sectionsColor: ['#fff' ,'#fff', '#000' , '#fff'],
    anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage','5thpage', '6thpage', 'lastPage'],
    menu: '#menu',
    scrollingSpeed: 800,
    afterLoad: function(index, nextIndex, direction){
      if (nextIndex == 1){
        $(".menuwrap").hide();
      }else{
        $(".menuwrap").show();
      };
    },
    onLeave: function(index, nextIndex, direction){
      if (nextIndex == 1){
        $(".menuwrap").hide();
      }else{
        $(".menuwrap").show();
      };
      if (nextIndex == 3){
        $(".menuwrap").addClass("on");
        $("#menu").find("a").addClass("on");
        $(".menuwrap").find("p").addClass("on");
      }else{
        $(".menuwrap").removeClass("on");
        $("#menu").find("a").removeClass("on");
        $(".menuwrap").find("p").removeClass("on");
      };
    },

  });



  AOS.init(200);

});





