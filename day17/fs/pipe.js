const fs = require("fs");
const readStream = fs.createReadStream("readme4.txt");
const writeStream = fs.createWriteStream("writeme3.txt");
readStream.pipe(writeStream);
//pipe 여러개의 스트림을 이을수 있음
//스트림으로 파일을 복사하는예제
