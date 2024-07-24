// 멀티 스레드 방식
const { Worker, isMainThread, parentPort } = require("worker_threads");

if (isMainThread) {
  // 부모일 때
  console.log("1");
  const worker = new Worker(__filename);

  worker.on("message", (message) => {
    console.log("3");
    console.log("from worker", message);
  });
  worker.on("exit", () => console.log("worker exit"));
  worker.postMessage("ping");
} else {
  // 워커일 때

  console.log("2");
  parentPort.on("message", (value) => {
    console.log("from parent", value);

    console.log("4");
    parentPort.postMessage("pong");
    parentPort.close();
  });
  //worker.postMessage로 부모에서 워커로 데이터를 보냄
  //parentPort.on(‘message’)로 부모로부터 데이터를 받고, postMessage로 데이터를 보냄
}

// Output
// from parent ping
// from worker pong
// worker exit
