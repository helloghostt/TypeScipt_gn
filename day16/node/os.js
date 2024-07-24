const os = require("os");

console.log("운영체제 정보---------------------------------");
console.log("os.arch():", os.arch()); // x64
console.log("os.platform():", os.platform()); //win32
console.log("os.type():", os.type()); //운영체제 종류 Windows_NT
console.log("os.uptime():", os.uptime()); //부팅 이후 흐른시간 485044.546초
console.log("os.hostname():", os.hostname()); //데스크탑 이름
console.log("os.release():", os.release()); // 운영체제 버전 10

console.log("경로------------------------------------------");
console.log("os.homedir():", os.homedir()); // 홈디렉토리 경로
console.log("os.tmpdir():", os.tmpdir()); // 임시파일저장 경로

console.log("cpu 정보--------------------------------------");
console.log("os.cpus():", os.cpus()); // 코어 정보 cpu
console.log("os.cpus().length:", os.cpus().length);

console.log("메모리 정보-----------------------------------");
console.log("os.freemem():", os.freemem()); // 사용가능 램정보
console.log("os.totalmem():", os.totalmem()); // 전체 램 용량
