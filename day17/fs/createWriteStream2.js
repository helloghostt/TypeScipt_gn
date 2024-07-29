const fs = require("fs");

const writeStream = fs.createWriteStream("./writeme2-1.txt");

for (let i = 1; i <)

    .toString(2)
writeStream.on("finish", () => {
  console.log("Write completed");
});

writeStream.end();
console.log("end");
