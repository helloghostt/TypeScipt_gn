const fs = require("fs");

const writeStream = fs.createWriteStream("./writeme2.txt");
writeStream.on("finish", () => {
  console.log("Write completed");
});

writeStream.write("Hello, Node.js!");
writeStream.write("Hello, Node.js!");
writeStream.end();

//output:  Hello, Node.js!Hello, Node.js!
