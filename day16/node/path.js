const path = require("path");

const string = __filename;

console.log("path.sep:", path.sep); // 경로 구분자 "/"
console.log("path.delimiter:", path.delimiter); // 환경 변수 구분자 ";"
console.log("------------------------------");
console.log("path.dirname():", path.dirname(string)); //파일의 위치 경로
console.log("path.extname():", path.extname(string)); // 확장자
console.log("path.basename():", path.basename(string)); // 확장자를 포함한 파일이름
console.log(
  "path.basename - extname:",
  path.basename(string, path.extname(string))
); // 파일이름 - 확장자
console.log("------------------------------");
console.log("path.parse()", path.parse(string)); //경로 분리, 따로따로 보여줌
console.log(
  "path.format():",
  path.format({
    dir: "C:\\users\\zerocho",
    name: "path",
    ext: ".js",
  })
); // path.parse한 거 다시 붙여줌
console.log(
  "path.normalize():",
  path.normalize("C://users\\\\zerocho\\path.js")
); // 잘못썼을때 경로를 정상적으로 변환해서 알려줌
console.log("------------------------------");
console.log("path.isAbsolute(C:\\):", path.isAbsolute("C:\\")); //절대경로면 true, 상대경로면 false  "true"
console.log("path.isAbsolute(./home):", path.isAbsolute("./home")); // "false"
console.log("------------------------------");
console.log(
  "path.relative():",
  path.relative("C:\\users\\zerocho\\path.js", "C:\\")
); //기준경로, 비교경로 두개 넣으면 가는방법 알려줌 "..\..\.."
console.log(
  "path.join():",
  path.join(__dirname, "..", "..", "/users", ".", "/zerocho")
); //경로 합침 "C:dev\현재파일 기준 앞의 경로 나오고\users\zerocho"
console.log(
  "path.resolve():",
  path.resolve(__dirname, "..", "users", ".", "/zerocho")
); //경로 합침 "C:\zerocho"
