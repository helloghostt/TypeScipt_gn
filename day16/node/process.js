require("dotenv").config();

const secretId = process.env.SECRET_ID;
const secretCode = process.env.SECRET_CODE;

console.log(secretId, secretCode);
