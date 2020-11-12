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
  })
});