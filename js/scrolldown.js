$(function() {
    $(window).scroll(function() {
      if ($(this).width() >= 1200 && $(this).scrollTop() > 766)  {          /* 要滑動到選單的距離 */
        $('.dropdowns').css('display', 'flex');
        $('.dropdowns').addClass('navFixed');   /* 幫選單加上固定效果 */
      } else {
        $('.dropdowns').removeClass('navFixed'); /* 移除選單固定效果 */
        $('.dropdowns').css('display', 'none');
      }
    });
  });