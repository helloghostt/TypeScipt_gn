function myWork(work) {
  return new Promise((resolve, reject) => {
    if (work === "done") {
      resolve("게임가능");
    } else {
      reject(new Error("게임불가능"));
    }
  });
}

//콜백과 다를바가 없음
myWork("done").then(
  function (value) {
    console.log(value);
  },
  function (err) {
    console.log(err);
  }
);

//좋음
myWork("done")
  .then(function (value) {
    console.log(value);
  })
  .catch(function (err) {
    console.error(err);
  });
