$(document).ready(function(){

//#Logo (top-left of navigation bar) events:
  $(".navbar").mouseenter(function(){
    $("#logo").clearQueue().finish();
    $("#logo").animate({maxWidth: "150px"}, 128);
  });

  $(".navbar").mouseleave(function(){
      $("#logo").animate({maxWidth: "56px"}, 128);
    });






























// Smooth Scrolling
  $(".navbar a, footer a[href='#myPage'").on('click', function(event){

    if (this.hash !== ""){
      event.preventDefault();

      var hash = this.hash;

      $('html, body').clearQueue().finish();
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 500, function(){
        window.location.hash = hash;
      });
    }
  });
});
