//登陆方式选择
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
var a = '', b = '', c = '', d = '';
var text;

function log_in () {
  var username = document.getElementsByName("username1")[0].value;
  var password = document.getElementsByName("password1")[0].value;
  var M = read(username, password);
  var ac = document.getElementById("form1");
  // document.cookie = "userId=828"
  if (M.every(item => item)) {
    ac.action = "../chart/index.htm";
    var hash = hex_md5("password");
    localStorage.setItem("password", hash);
    localStorage.setItem("username", username);
    // var hashu = hex_md5("username");
    var cvalue = hash + username;
    ac.target = "_blank";
    Cookies.set('info', 'cvalue', { expires: 4, path: '/' });
    // getCookie(username);
    // checkCookie()
    // setCookie("userinfo", cvalue, 3)
    ac.submit();
  }
  else {
    matching(M, display);
  }
}

function read (user, pass) {
  var username = user;
  var password = pass;

  var regu = new RegExp("^[A-z]([A-z]|[0-9]){4,8}$");
  var regp = new RegExp("^([A-z]|[0-9]|[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]){6,12}$");
  var regpI = new RegExp("[A-Z]");
  var regpS = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]");
  var us = regu.test(username);     //账号正确性
  var ps = regp.test(password);     //密码正确性
  var psI = regpI.test(password);   //是否包含大写字母
  var psS = regpS.test(password);   //是否包含特殊符号
  var match = new Array(us, ps, psI, psS);
  return match;
}
function matching (match, fn) {
  if (match[0] == false) {
    a = "账户必须以字母开头且包含5-8位字母或数字<br>";
  } else {
    a = "";
  }
  if (match[1] == false) {
    b = "密码只能包含6-12位英文字母、数字和特殊符号<br>";
  } else {
    b = "";
  }

  if (match[2] == false) {
    c = "密码须至少有一个大写字母<br>";
  } else {
    c = "";
  }
  if (match[3] == false) {
    d = "密码须至少有一个特殊符号";
  } else {
    d = "";
  }
  text = a + b + c + d;
  fn && fn()
}
//cookie
function setCookie (name, value, day) {
  if (day !== 0) {     //当设置的时间等于0时，不设置expires属性，cookie在浏览器关闭后删除
    var d = new Date();
    d.setTime(d.getTime() + (day * 24 * 60 * 60 * 1000));
    document.cookie = name + "=" + escape(value) + ";expires=" + d.toUTCString();
    console.log(name + value + d.toUTCString())
  } else {
    document.cookie = name + "=" + escape(value);
  }
}
function getCookie (cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function checkCookie () {
  var username = getCookie("username");
  if (username != "") {
    alert("Welcome again " + username);
  } else {
    username = prompt("Please enter your name:", "");
    if (username != "" && username != null) {
      setCookie("username", username, 365);
    }
  }
}
//var date = new Date(+new Date() + expires);

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

//识别错误弹窗
function display () {
  document.getElementById('cover').style.display = "";
  document.getElementById('error').innerHTML = text;
}

//关闭弹窗
function hidder () {
  document.getElementById('cover').style.display = "none";
}

