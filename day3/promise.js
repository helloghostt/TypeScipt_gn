const myPromise = new Promise((resolve, reject)=> {
    setTimeout(() => {
        resolve("success");
        reject("I failed"); //resolve, reject 둘중에 하나는 주석처리하고 돌려야함
    },5000);
});
myPromise
    .then((done) => {  // then:위에꺼 실행된 후에 실행된다
        console.log(done);
    })
    .catch((err) => {  // catch: 에러일 때 실행된다
        console.error(err);
    });