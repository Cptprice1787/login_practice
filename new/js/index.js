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
/*
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
*/

//正则账号密码格式识别
function log_in () {
  var username = document.getElementsByName("username1")[0].value;
  var password = document.getElementsByName("password1")[0].value;
  var t = new Array(true, true, true, true);
  var ac = document.getElementById("form1");

  var a = b = c = d = "\n";
  var regu = new RegExp("^[A-z]([A-z]|[0-9]){4,8}$");
  var regp = new RegExp("^([A-z]|[0-9]|[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]){6,12}$");
  var regpI = new RegExp("[A-Z]");
  var regpS = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]");
  var us = regu.test(username);
  var ps = regp.test(password);
  var psI = regpI.test(password);
  var psS = regpS.test(password);
  var match = new Array(us, ps, psI, psS)
  if (match[0] == false)
    a = "账户必须以大写字母开头且包含5-8位字母或数字";
  if (match[1] == false)
    b = "密码只能包含6-12位英文字母、数字和特殊符号";
  if (match[2] == false)
    c = "密码须至少有一个大写字母";
  if (match[3] == false)
    d = "密码须至少有一个特殊符号";
  if (match.toString() == t.toString()) {
    ac.action = "../new/receive.htm";
    ac.submit();
  }
  else
    alert(a + b + c + d);
}






/**
 * function:校验输入特殊字符"<>/""
 * @keyCode:字符串 string
 */
/*const checkSpecificKey = function (keyCode) {
    let specialKey = "<>/";
    let realkey = String.fromCharCode(keyCode);
    let flg = false;
    var flag = /[<>/]/
    flg = flag.test(keyCode);
    if (flg) {
      toast("请勿输入特殊字符<>/", 2000);
      keyCode = keyCode.replace(flag, '"');
      return false;
    }
    return true;
  }
  */