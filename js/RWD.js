if(typeof jQuery === 'undefined') {
    console.log('jQuery is required');
}
    
   +(function(window, $) {
    var match = window.matchMedia('screen and (max-width: 451px)');
    var rwdMode = null;
     
    // 進行切換作業
    var transformFunc = function (normalCallback, mobileCallback) {
     if (rwdMode === 'normal') {
      // 切換成一般模式
      normalCallback.call(normalCallback);
     } else if (rwdMode === 'mobile') {
      // 切換成手機模式
      mobileCallback.call(mobileCallback);
     } else {
      throw new Error('Can not resolve rwdMode.');
     }
    };
     
    // 觸發RWD轉換事件
    var reframeRWD = function() {
     rwdMode = match.matches ? 'mobile' : 'normal';
    
     $('*').each(function (index, el) {
      var events = $._data($(el).get(0), "events");
      if (typeof events !== 'undefined') {
       if (events.hasOwnProperty('rwdTransform')) {
        $(el).trigger('rwdTransform', [transformFunc]);
       }
      }
     });
    };
     
    // 取得目前rwdMode值
    window.rwdMode = function() {
     return rwdMode;
    };
     
    // 偵測視窗大小切換
    $(window).on('resize', function () {
     if (match.matches) {     // 偵測到為手機模式
      // 如果目前框架為一般版且尚未切換
      if (rwdMode == 'normal') {
       rwdMode = 'mobile';
       reframeRWD();
      }
     } else {        // 偵測到為一般模式
      // 如果目前框架為手機板且尚未切換
      if (rwdMode == 'mobile') {
       rwdMode = 'normal';
       reframeRWD();
      }
     }
    });
    
    // 頁面載完後進行RWD轉換
    $(window).on('load', function () {
     reframeRWD();
    });
     
    // 註冊jQuery客製化事件到DOM
    $.fn.rwdTransform = function(normalFunc, mobileFunc) {
     $(this).on('rwdTransform', function(event, baseFunc) {
      baseFunc(normalFunc, mobileFunc);
     });
    };
     
   })(window, jQuery);