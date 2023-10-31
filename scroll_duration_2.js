//문자열의 yyyyMMdd형식 날짜를 실제 날짜로 변경해주는함수
function parseDate(str) {
  var y = str.substr(0, 4);
  var m = str.substr(4, 2);
  var d = str.substr(6, 2);
  return new Date(y,m-1,d);
}

 function setTMPCookie(name, value) {
  document.cookie = name + '=' + value + ';expires=;path=/';
}
 
/*
try{
  if(document.location.href.indexOf("&NaPm=")>-1&&document.referrer.length==0 ){      
    
    Object.defineProperty(document, "referrer", {get : function(){ return "https://m.search.naver.com/search.naver?sm=mtp_sly.hst&where=m&query=%EC%95%84%EB%AA%A8%EB%A0%88%EB%AA%B0&acr=1"; }});
    var fullPathNm=document.location.pathname+document.location.search;
   // var napmPath= /NaPm=[^&]+/.exec(fullPathNm)[0].replaceAll("NaPm=","");
   // setTMPCookie("NA_CO", napmPath);
  //  setTMPCookie("NA_SAS", 1);    
  }
}catch(e){
}*/

function getCMPCookie( cookieName )
{
 
try{
      var search = cookieName + "=";
      var cookie = document.cookie;
      // 현재 쿠키가 존재할 경우
      if( cookie.length > 0 )
      {
       // 해당 쿠키명이 존재하는지 검색한 후 존재하면 위치를 리턴.
       startIndex = cookie.indexOf( cookieName );
       // 만약 존재한다면
       if( startIndex != -1 )
       {
        // 값을 얻어내기 위해 시작 인덱스 조절
        startIndex += cookieName.length;
        // 값을 얻어내기 위해 종료 인덱스 추출
        endIndex = cookie.indexOf( ";", startIndex );
        // 만약 종료 인덱스를 못찾게 되면 쿠키 전체길이로 설정
        if( endIndex == -1) endIndex = cookie.length;
        // 쿠키값을 추출하여 리턴
        return unescape( cookie.substring( startIndex + 1, endIndex ) );
       }
       else
       {// 쿠키 내에 해당 쿠키가 존재하지 않을 경우
        return false;
       }
      }
      else
      {   // 쿠키 자체가 없을 경우
       return false;
      }
  }catch(e){
    return false;
  }
   return false;
}

 function setCMPCookie( cookieName, cookieValue, expireDate )
 {
  var today = new Date();
  today.setDate( today.getDate() + parseInt( expireDate ) );
  document.cookie = cookieName + "=" + escape( cookieValue ) + "; path=/; expires=" + today.toGMTString() + ";";
 }

 function deleteCMPCookie( cookieName )
 {
  var expireDate = new Date();
  //어제 날짜를 쿠키 소멸 날짜로 설정한다.
  expireDate.setDate( expireDate.getDate() - 1 );
  document.cookie = cookieName + "= " + "; expires=" + expireDate.toGMTString() + "; path=/";
 }

Date.prototype.yyyymmdd = function() {
    var yyyy = this.getFullYear().toString();
    var mm = (this.getMonth() + 1).toString();
    var dd = this.getDate().toString();
    return  yyyy + (mm[1] ? mm : "0" + mm[0]) +  (dd[1] ? dd : "0" + dd[0]);
}  

$(document).ready(function() {
  try{
   var cmpParams = {};
   var utmCmp = undefined;
   var cookieResult = undefined;

   window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, 
      function(str, key, value) { 
         cmpParams[key] = value; 
     }
   );
    
   if(cmpParams.utm_campaign != undefined ){
     if( getCMPCookie("cmp")!=false){
    deleteCMPCookie("cmp");
     }	
     utmCmp = cmpParams.utm_campaign;
     var yyyyMMddDate = new Date().yyyymmdd();
     cookieResult =utmCmp+"/"+yyyyMMddDate;
     setCMPCookie("cmp", cookieResult , 10  );
   }
  }catch(e){
  }   
});


  $('body').on('click', 'a' , function (e) {
      try{
              var firstNode;
              var secondNode;
              var thirdNode;
              var fourthNode;

              var select;
            var first_href= "";
              var apClickTag = "";

              firstNode = this;
        
              var index = $(this).index();
        
              var href=firstNode.getAttribute("href");
              var eventArea = firstNode.getAttribute("ap-click-area");
              var eventName = firstNode.getAttribute("ap-click-name");
              var eventData = firstNode.getAttribute("ap-click-data");
    
            first_href =href;
        
              if(first_href != null && first_href.indexOf('&clickUrl') > -1){
                
                first_href = first_href.split('&clickUrl');
                select = firstNode.tagName+"[href*='"+first_href[0]+"']"  
              }else if(first_href != null){
                select = firstNode.tagName+"[href='"+href+"']"  
              }else{
                select = firstNode.tagName
              }
        
              if(eventArea != null && eventArea.trim() != ""){
                apClickTag += "[ap-click-area='" + eventArea + "']";
              }
              if(eventName != null && eventName.trim() != ""){
                apClickTag += "[ap-click-name='" + eventName + "']";
              }
              if(eventData != null && eventData.trim() != ""){
                apClickTag += "[ap-click-data='" + eventData + "']";
              }
              
              select = select + apClickTag;
        
              secondNode = firstNode.parentElement;
      select = ga360_AddTag(select ,secondNode );

              thirdNode = secondNode.parentElement;
      select = ga360_AddTag(select ,thirdNode );
        
              fourthNode = thirdNode.parentElement;
            select = ga360_AddTag(select ,fourthNode );


            /*포함되어있는 Text값*/
            var innerText = "Not Set";
            var isFirstText = false;
            if(ga360_Trim(firstNode.innerText).length>0){
              innerText = ga360_Trim(firstNode.innerText);
              isFirstText= true;
            }else if(ga360_Trim(secondNode.innerText).length>0 ){
              innerText = ga360_Trim(secondNode.innerText);
            }else if(ga360_Trim(thirdNode.innerText).length>0 ){
              innerText = ga360_Trim(thirdNode.innerText);
            }else if(ga360_Trim(fourthNode.innerText).length>0 ){
              innerText = ga360_Trim(fourthNode.innerText);
            }
    
            var eventArea = "ATag:"+document.title;
            var eventName ="";
            if(isFirstText){
              var eventName =  innerText;
            }else{
            var eventName =  ga360_textLengthOverCut(innerText,20,null);
            }
        
            var eventData = select;
           
            //eventData index 
            if($(eventData).length > 1) {
              var index = $(eventData).index(this);  
              eventData = eventData + ':eq(' + index + ')';
            }
        
            var clickX = e.pageX - $(eventData).offset().left; // element 기준 X좌표
            var clickY = e.pageY - $(eventData).offset().top; // element 기준 Y좌표
            

            if(typeof duArray != 'undefined'){
                dataLayer.push({ 'event' : 'commonEvent', 'eventCategory' : eventArea , 'eventAction' : 'AUTO', 'eventLabel' : eventData, 'dimension70' : clickX+","+clickY, 'dimension58' : first_href,
                                  'metric20' : duArray[0], 'metric21' : duArray[1], 'metric22' : duArray[2], 'metric23' : duArray[3], 'metric24' : duArray[4], 'metric25' : duArray[5],
                                  'metric26' : duArray[6], 'metric27' : duArray[7], 'metric28' : duArray[8], 'metric29' : duArray[9], 'metric30' : duArray[10]});                
                duArray = Array.from({length: 11}, function(){ return 0; });
            }else{
                 dataLayer.push({ 'event' : 'commonEvent', 'eventCategory' : eventArea , 'eventAction' : 'AUTO', 'eventLabel' : eventData, 'dimension70' : clickX+","+clickY, 'dimension58' : first_href});  
            }

      }catch(e){
        console.log(e);
      }

  });

  //button 태깅 추가  
  $('body').on('click', 'button' , function (e) {
   try{
           var firstNode;
           var secondNode;
           var thirdNode;
           var fourthNode;

           var select;
           var first_href= "";

           firstNode = this;
           var btnClassName = firstNode.className;
           var btnId = firstNode.id;
           var btn = "";
           var apClickTag = "";
     
           var eventArea = firstNode.getAttribute("ap-click-area");
           var eventName = firstNode.getAttribute("ap-click-name");
           var eventData = firstNode.getAttribute("ap-click-data");
          
           //if(btnClassName.trim() != ""){
            //  btn = "[class*='" + btnClassName + "']";
           //}else 
             
           if(btnId.trim() != ""){
              btn = "[id='" + btnId + "']";
           }

          select = firstNode.tagName + btn
         
         if(eventArea != null && eventArea.trim() != ""){
            apClickTag += "[ap-click-area='" + eventArea + "']";
          }
          if(eventName != null && eventName.trim() != ""){
            apClickTag += "[ap-click-name='" + eventName + "']";
          }
          if(eventData != null && eventData.trim() != ""){
            apClickTag += "[ap-click-data='" + eventData + "']";
          }
              
          select = select + apClickTag;
     
          secondNode = firstNode.parentElement;
          select = ga360_AddTag(select ,secondNode );

          thirdNode = secondNode.parentElement;
          select = ga360_AddTag(select ,thirdNode );
     
          fourthNode = thirdNode.parentElement;
          select = ga360_AddTag(select ,fourthNode );


         /*포함되어있는 Text값*/
         var innerText = "Not Set";
           var isFirstText = false;
         if(ga360_Trim(firstNode.innerText).length>0){
           innerText = ga360_Trim(firstNode.innerText);
           isFirstText= true;
         }else if(ga360_Trim(secondNode.innerText).length>0 ){
           innerText = ga360_Trim(secondNode.innerText);
         }else if(ga360_Trim(thirdNode.innerText).length>0 ){
           innerText = ga360_Trim(thirdNode.innerText);
         }else if(ga360_Trim(fourthNode.innerText).length>0 ){
           innerText = ga360_Trim(fourthNode.innerText);
         }
       
         var eventArea = "ATag:"+document.title;
           var eventName ="";
           if(isFirstText){
           var eventName =  innerText;
         }else{
             var eventName =  ga360_textLengthOverCut(innerText,20,null);
         }
     
         var eventData = select;
     
         //eventData index 
         if($(eventData).length > 1) {
           var index = $(eventData).index(this);  
           eventData = eventData + ':eq(' + index + ')';
         }
         
         var clickX = e.pageX - $(eventData).offset().left; // element 기준 X좌표
         var clickY = e.pageY - $(eventData).offset().top; // element 기준 Y좌표

         if(typeof duArray != 'undefined'){
           dataLayer.push({ 'event' : 'commonEvent', 'eventCategory' : eventArea , 'eventAction' : 'AUTO', 'eventLabel' : eventData, 'dimension70' : clickX+","+clickY, 'dimension58' : first_href,
                            'metric20' : duArray[0], 'metric21' : duArray[1], 'metric22' : duArray[2], 'metric23' : duArray[3], 'metric24' : duArray[4], 'metric25' : duArray[5],
                            'metric26' : duArray[6], 'metric27' : duArray[7], 'metric28' : duArray[8], 'metric29' : duArray[9], 'metric30' : duArray[10]});                
           duArray = Array.from({length: 11}, function(){ return 0; });
          }else{
            dataLayer.push({ 'event' : 'commonEvent', 'eventCategory' : eventArea , 'eventAction' : 'AUTO', 'eventLabel' : eventData, 'dimension70' : clickX+","+clickY, 'dimension58' : first_href});  
          }

   }catch(e){
     console.log(e);
   }

});

  function ga360_AddTag(select, node){
  try{
    if(node.id.trim() != ""){
              select = node.tagName+"[id='"+node.id+"'] " + select;
          }else{
              select = node.tagName+" " + select;
          }          
      }catch(e){
      }
      return select;
  }

  function ga360_Trim(value){
  try{
        value = value.replace(/\s+/, "");//왼쪽 공백제거
        value = value.replace(/\s+$/g, "");//오른쪽 공백제거
        value = value.replace(/\n/g, "");//행바꿈제거
        value = value.replace(/\r/g, "");//엔터제거
      }catch(e){
        
      }
      return value;

  }

function ga360_textLengthOverCut(txt, len, lastTxt) {
    try{
      if (len == "" || len == null) { // 기본값
        len = 20;
      }
      if (lastTxt == "" || lastTxt == null) { // 기본값
        lastTxt = "...";
      }
      if (txt.length > len) {
        txt = txt.substr(0, len) + lastTxt;
      }
    }catch(e){
    }
    return txt;
}

var AP_POPUP_ISOK= "";
try{   
  if (localStorage.getItem("apMainPopup_936") != null){
    AP_POPUP_ISOK="Y";
  }else{
    AP_POPUP_ISOK="N";
  }   
}catch(e){    
}
