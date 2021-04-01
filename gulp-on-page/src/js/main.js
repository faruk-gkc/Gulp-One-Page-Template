
$(function(){

    let scrollTop = $(window).scrollTop();
    if(scrollTop > 150){
      $('.header-navbar').addClass('header-fixed')
    }
    else{
      $('.header-navbar').removeClass('header-fixed');
    }

  $(window).on('scroll',function(){
    let scrollTop = $(window).scrollTop();
    if(scrollTop > 150){
      $('.header-navbar').addClass('header-fixed')
    }
    else{
      $('.header-navbar').removeClass('header-fixed');
    }
  })
})

let scroll = new SmoothScroll('a[href*="#"]',{
  speed:1200
});