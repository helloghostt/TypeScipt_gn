const zlib = require("zlib");
const fs = require("fs");

const readStream = fs.createReadStream("./readme4.txt");
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream("./readme4.txt.gz");
readStream.pipe(zlibStream).pipe(writeStream);
//압축하고 복사하는 예제
//  내장모듈사용, 왜? 손실적게
