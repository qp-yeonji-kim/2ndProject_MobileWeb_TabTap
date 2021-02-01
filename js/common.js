$(document).ready(function () {
  /* #nav 좌표 조정하기 */
  var $nav = $('#nav');
  var $gnb = $('#gnb');
  var $menuBtn = $('.menu_btn');

  $('#header .menu_btn_open').on('click', function () {
    $menuBtn.addClass('act_left');
    var $first = $nav.find('[data-link="first"]');
    var $last = $nav.find('[data-link="last"]');

    $nav.css({display: 'block'}).stop().animate({left: '20%'}, 300, function(){
      $first.focus();});
    $first.on('keydown', function(e) {
      if(e.shiftKey && e.keyCode == 9) {
        e.preventDefault();
        $last.focus();
      }
    });
    $last.on('keydown', function (e) {
      if (!e.shiftKey && e.keyCode == 9) {
        e.preventDefault();
        $first.focus();
      }
    });

    $('#nav .menu_btn_close').on('click', function(){
      $nav.stop().animate({left: '100%'}, 300, function(){
        $(this).css({display: 'none'}).find('#gnb > li.on').removeClass('on').children('ul').stop().slideUp();
        $('#header .menu_btn_open').focus();
      });
      $menuBtn.removeClass('act_left');
      return false;
    });
    return false;
  });
  
  /* #gnb depth2 내려오기 */
  $gnb.find('li ul').hide();
  $gnb.find('>li >a').on('click', function () {
    if ($(this).next().length === 0) {
      location.href = $(this).attr('href');
    } else {
      $(this).parent().siblings().removeClass('on').find('ul').stop().slideUp();
      $(this).next().stop().slideToggle().parent().toggleClass('on');
    }
    return false;
  });
});