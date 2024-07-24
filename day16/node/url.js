const url = require("url");

const { URL } = url;
const myURL = new URL(
  "http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor"
);

console.log("new URL():", myURL); // href, origin, protocol, username 등등
console.log("url.format():", url.format(myURL)); // http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor
