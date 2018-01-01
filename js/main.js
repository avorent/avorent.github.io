$(document).ready(function(){

//#Logo (top-left of navigation bar) events:
  $("nav").mouseenter(function(){
    $("#logo").clearQueue().finish();
    $("#logo").animate({maxWidth: "130px"}, 128);
  });
  $("nav").mouseleave(function(){
      $("#logo").animate({maxWidth: "40px"}, 128);
    });
});
