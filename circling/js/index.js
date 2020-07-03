// var a = document.getElementsByClassName("_1")[0];
// var b = document.getElementsByClassName("_2")[0];
// var c = document.getElementsByClassName("_3")[0];
// var elWidth = 200
// var elHeight = 200

// var s = new Array(a.style.width, b.style.width, c.style.width, a.style.height, b.style.height, c.style.height)

// function tap () {
//   a.style.width = elWidth + 'px'
//   b.style.width = (elWidth - 100) + 'px'
//   c.style.width = (elWidth - 200) + 'px'
//   a.style.height = elHeight + 'px'
//   b.style.height = (elHeight - 100) + 'px'
//   c.style.height = (elHeight - 200) + 'px'
//   setInterval(function () {
//     elWidth = elWidth + 10
//     elHeight = elHeight + 10
//     a.style.width = elWidth + 'px'
//     b.style.width = (elWidth - 100) + 'px'
//     c.style.width = (elWidth - 200) + 'px'
//     a.style.height = elHeight + 'px'
//     b.style.height = (elHeight - 100) + 'px'
//     c.style.height = (elHeight - 200) + 'px'
//     console.log(a.style.width, b.style.width, c.style.width, elWidth, a.style.height, b.style.height, c.style.height);
//     for (let i = 0;i < s.length;i++) {
//       if (s[i] == "400px")
//         s[i] = "200px"
//     }
//   }, 50)
// }

//延时跳转
setTimeout(function () {
  window.location.href = "../chart/index.htm"
}, 5000)