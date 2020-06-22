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

//input onclick
var inputArr = document.getElementsByTagName("input");
  for (let j = 0;j<inputArr.length;j++){
    inputArr.onfocus = function(){
      
    }
  }