const fs = require("fs");
console.log("start");
fs.readFile("./readme2.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log("1", data.toString());

  fs.readFile("./readme2.txt", (err, data) => {
    if (err) {
      throw err;
    }
    console.log("2", data.toString());
    fs.readFile("./readme2.txt", (err, data) => {
      if (err) {
        throw err;
      }
      console.log("3", data.toString());
      console.log("end");
    });
  });
});

//output
// start
// 1 저를 여러 번 읽어보세요.
// 2 저를 여러 번 읽어보세요.
// 3 저를 여러 번 읽어보세요.
// end
