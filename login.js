let loginbtn = document.getElementById("loginbtn")

function login() {
  let useridvalue = document.getElementById("useridvalue").value
  document.cookie = "cstuserid=" + useridvalue;
}

loginbtn.addEventListener("click", login)    

