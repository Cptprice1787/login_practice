//定义数组并获取数组内各个的节点
var buttonArr = document.getElementsByTagName("button");
var divArr = document.getElementsByClassName("sign_in");
// console.log('divArr', divArr)
for (let i = 0;i < buttonArr.length;i++) {
  let buttoni = buttonArr[i]
  buttoni.onclick = function () {
    //显示点击按钮对应的div
    if (i == 0) {
      divArr[0].style.display = "block";
      divArr[1].style.display = "none";
      buttonArr[0].style.borderBottom = "3px solid blue";
      buttonArr[1].style.borderBottom = "unset";
    }
    else {
      divArr[0].style.display = "none";
      divArr[1].style.display = "block";
      buttonArr[1].style.borderBottom = "3px solid blue";
      buttonArr[0].style.borderBottom = "unset";
    }
  }
}

//登陆判断模拟
var ac = document.getElementById("form1");
let tu = "admin", tp = 123456;
function log_in () {
  var username = document.getElementsByName("username1")[0].value;
  var password = document.getElementsByName("password1")[0].value;
  //alert('值为' + username + '&nbsp' + password)
  if (username == tu && password == tp) {
    ac.action = "../new/receive.htm";
    ac.submit();
  }
  else {
    alert("账号或密码错误，请重新输入");
  }
}