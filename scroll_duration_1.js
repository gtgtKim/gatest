try{
  if(typeof duArray == 'undefined'){
     var duArray = new Array();
     for(var i = 0; i < 11; i++){
     duArray[i] = 0;
     }
  } 
  
  //1초에 한번씩 실행 
  setInterval(function(){calDuration(duArray)}, 1000);
}catch(e){
console.log(e);
}

function calDuration(duArray)
{
if($(window).scrollTop() != undefined && $(window).scrollTop() != null ){
    // 화면 가로 회전 시 예외 처리
           
var scrollDepth = Math.round(($(window).scrollTop() / ($(document).height() - $(window).height())) * 100 / 10) * 10;   
duArray[scrollDepth/10] = duArray[scrollDepth/10] + 1;

 }
}
