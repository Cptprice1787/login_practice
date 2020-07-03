// 获取登陆信息，替换头像
window.onload = function () {
  var e = localStorage.getItem("username")
  var icon = document.getElementById("person");
  icon.src = "";
  icon.alt = "default";
  var person = document.getElementsByClassName("P")[0];
  person.innerText = e;
  icon.style = "display: none;";
  var de = document.getElementsByClassName("p_icon")[0];
  de.style = "display: inline;";


  // 权限列表生成二维数组
  var tr = document.getElementsByTagName('tr');
  var td = document.getElementsByTagName('td');
  var arr = new Array();
  // 初始化
  // console.log(td)
  for (var i = 0;i < tr.length - 1;i++) {
    arr[i] = new Array();
    for (var j = 0;j < td.length / (tr.length - 1);j++) {
      arr[i][j] = '';
    }
  }
  // 存入二维数组
  for (var x = 0;x < tr.length - 1;x++) {
    for (var y = 0;y < td.length / (tr.length);y++) {
      arr[x][y] = td[x * (td.length / (tr.length)) + y].innerHTML;
      console.log('arr[' + x + '][' + y + ']  =  ' + arr[x][y])
    }
  }
}