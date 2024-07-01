async function delayedResult() {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            resolve("I completed successfully");
        }, 2000);
    });
}

(async function execAsyncFundc(){
    const result = await delayedResult();
    console.log(result);
})();