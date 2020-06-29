//processing news
function info () {
  for (let i = 0;i < 1000;i++) {
    document.write("processing&nbsp")
    for (let j = 19;j < 10000;j += 20) {
      if (i == j) {
        document.write("processing\n")
      }
      else
        continue;
    }
  }
}