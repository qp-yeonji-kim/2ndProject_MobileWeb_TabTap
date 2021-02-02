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
    
    on: {
      slideChangeTransitionStart: function(){
        var tgIdx = mainSwiper.activeIndex;
        if(tgIdx === 0) $('#cnt_main .swiper-container').removeClass('top mid btm').addClass('top');
        else if (tgIdx === 1) $('#cnt_main .swiper-container').removeClass('top mid btm').addClass('mid');
        else $('#cnt_main .swiper-container').removeClass('top mid btm').addClass('btm');
      },
    }
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
  
  var eventSwiper = new Swiper('#cnt_now_event .swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });

  var reviewSwiper = new Swiper('#cnt_best-review .swiper-container', {
    centeredSlides: true,
    slidesPerView: 2,
    loop: true,
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: false,
    },
  });

  $(window).on('scroll', function () {
    var scrollT = $(this).scrollTop();
    var timer = 0;

    clearTimeout(timer);
    timer = setTimeout(function(){
      if (scrollT > $('#cnt_company').offset().top - 500) {
        $('#header').addClass('white');
        $('#cnt_company li').addClass('on');
      }
      else{
        $('#header').removeClass('white');
        $('#cnt_company li').removeClass('on');
      }
    }, 1000);
  });
});