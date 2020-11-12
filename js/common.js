$(document).ready(function () {
  /* #nav 좌표 조정하기 */
  var $nav = $('#nav');
  var $gnb = $('#gnb');
  $('#header .menu_btn').on('click', function () {
    if ($(this).hasClass('act_left')) { //닫기
      $nav.stop().animate({left: '100%'}, 300, function () {
        $(this).css({display: 'none'}).find('#gnb > li.on').removeClass('on').children('ul').stop().slideUp();
      });
      $(this).removeClass('act_left').find('.blind-b').text('메뉴 열기');
    } else {
      $(this).addClass('act_left').find('.blind-b').text('메뉴 닫기');
      var $first = $gnb.find('[data-link="first"]');
      var $last = $gnb.find('[data-link="last"]');
      $nav.css({display: 'block'}).stop().animate({left: '20%'}, 300, function () {
        $first.focus();});
      $first.on('keydown', function (e) {
        console.log(e.keyCode);
        if (e.shiftKey && e.keyCode == 9) {
          e.preventDefault();
          $last.focus();
        }
      });
      $last.on('keydown', function (e) {
        if (!e.shiftKey && e.keyCode == 9) {
          e.preventDefault();
          $('#menu_btn').focus();
        }
      });
    }
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