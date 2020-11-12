  /* swiper */
$(document).ready(function(){
  var mainSwiper = new Swiper('#cnt_main .swiper-container', {
    pagination: {
      el: '.swiper-pagination',
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
  $('#controller .autoplay').hide();
  $('#controller .autostop').on('click', function(){
    $(this).hide().siblings('button').show();
    mainSwiper.autoplay.stop();
  });
  $('#controller .autoplay').on('click', function(){
    $(this).hide().siblings('button').show();
    mainSwiper.autoplay.start();
  });
});