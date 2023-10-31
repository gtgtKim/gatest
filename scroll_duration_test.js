try {
  if (typeof duArray == 'undefined') {
    var duArray = new Array();
    for (var i = 0; i < 11; i++) {
      duArray[i] = 0;
    }
  }

  //1초에 한번씩 실행 
  setInterval(function () { calDuration(duArray) }, 1000);
} catch (e) {
  console.log(e);
}

function calDuration(duArray) {
  if ($(window).scrollTop() != undefined && $(window).scrollTop() != null) {
    // 화면 가로 회전 시 예외 처리

    var scrollDepth = Math.round(($(window).scrollTop() / ($(document).height() - $(window).height())) * 100 / 10) * 10;
    duArray[scrollDepth / 10] = duArray[scrollDepth / 10] + 1;

  }
}


//a태그에 태깅
$('body').on('click', 'a', function (e) {
  try {



    if (typeof duArray != 'undefined') {
      dataLayer.push({
        'event': 'A_tag_Event',
        'scroll_0': duArray[0], 'scroll_10': duArray[1], 'scroll_20': duArray[2], 'scroll_30': duArray[3], 'scroll_40': duArray[4], 'scroll_50': duArray[5],
        'scroll_60': duArray[6], 'scroll_70': duArray[7], 'scroll_80': duArray[8], 'scroll_90': duArray[9], 'scroll_100': duArray[10]
      });
      duArray = Array.from({ length: 11 }, function () { return 0; });
    } else {
      dataLayer.push({ 'event': 'A_tag_Event' });
    }

  } catch (e) {
    console.log(e);
  }

});


//버튼 태그에 태깅
$('body').on('click', 'button', function (e) {
  try {



    if (typeof duArray != 'undefined') {
      dataLayer.push({
        'event': 'A_tag_Event',
        'scroll_0': duArray[0], 'scroll_10': duArray[1], 'scroll_20': duArray[2], 'scroll_30': duArray[3], 'scroll_40': duArray[4], 'scroll_50': duArray[5],
        'scroll_60': duArray[6], 'scroll_70': duArray[7], 'scroll_80': duArray[8], 'scroll_90': duArray[9], 'scroll_100': duArray[10]
      });
      duArray = Array.from({ length: 11 }, function () { return 0; });
    } else {
      dataLayer.push({ 'event': 'A_tag_Event' });
    }

  } catch (e) {
    console.log(e);
  }

});
