function checkCookie(key) {
    let cookieArray = document.cookie.split(';'); // 쿠키를 배열로 변환
  
    for(let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i];
      while (cookie.charAt(0) == ' ') { // 쿠키 앞의 공백 제거
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(key) == 0) { // 해당 키를 가진 쿠키가 있는지 확인
        return true;
      }
    }
    return false; // 해당 키를 가진 쿠키가 없음
  }



function login() {
    if (!checkCookie("custuserid")){
  let useridvalue = document.getElementById("useridvalue").value
  document.cookie = "cstuserid=" + useridvalue;
  location.reload();
} else { alert("이미 로그인되어 있습니다.")
}
}

function logout() {
    if (checkCookie("custuserid")){
    document.cookie = "cstuserid= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
    location.reload()
} else { alert("이미 로그아웃 되어 있습니다.")
}}

if (checkCookie("custuserid")){
    document.getElementById("loginstatus").innerText = "로그인된 상태"
} else{
    document.getElementById("loginstatus").innerText = "비로그인 상태"
}


let loginbtn = document.getElementById("loginbtn")
loginbtn.addEventListener("click", login)    
let logoutbtn = document.getElementById("logoutbtn")
logoutbtn.addEventListener("click", logout)



