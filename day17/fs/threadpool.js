const crypto = require("crypto");

const pass = "pass";
const salt = "salt";
const start = Date.now();

crypto.pbkdf2(pass, salt, 1000000, 128, "sha512", () => {
  console.log("1:", Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, "sha512", () => {
  console.log("2:", Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, "sha512", () => {
  console.log("3:", Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, "sha512", () => {
  console.log("4:", Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, "sha512", () => {
  console.log("5:", Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, "sha512", () => {
  console.log("6:", Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, "sha512", () => {
  console.log("7:", Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, "sha512", () => {
  console.log("8:", Date.now() - start);
});

//output 순서는 랜덤 오차를 m/s단위로
// 1: 3589
// 4: 3615
// 2: 3846
// 3: 3880
// 6: 7476
// 5: 7561
// 8: 7695
// 7: 7733
