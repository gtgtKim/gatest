function checkCookie(key) {
  let cookieArray = document.cookie.split(';'); // 쿠키들을 배열로 변환

  for(let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i].trim();
      if (cookie.indexOf(key + '=') == 0) { // 해당 키를 가진 쿠키가 있는지 확인
          return true;
      }
  }
  return false; // 해당 키를 가진 쿠키가 없음
  }

function getCookieValue(cookieName) {
    let cookieArray = document.cookie.split(';'); // 쿠키들을 배열로 변환

    for(let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i].trim();
        if (cookie.indexOf(cookieName + '=') == 0) { // 해당 이름을 가진 쿠키가 있는지 확인
            return cookie.substring(cookieName.length + 1); // 쿠키의 값을 반환
        }
    }
    return ""; // 쿠키를 찾지 못했을 때 빈 문자열 반환
}

function login() {
    if (document.getElementById("loginbtn").innerText = "로그인"){
      let useridvalue = document.getElementById("useridvalue").value
      document.cookie = "cstuserid=" + useridvalue;
      location.reload();
} else {document.cookie = "cstuserid= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
location.reload()
}
}


if (checkCookie("cstuserid")){
  let currentUserId = getCookieValue("cstuserid")
    document.getElementById("loginbtn").innerText = "로그아웃";
    document.getElementById("useridvalue").outerHTML=`<li>user_id: ${currentUserId}</li>`
}


let loginbtn = document.getElementById("loginbtn")
loginbtn.addEventListener("click", login)    

