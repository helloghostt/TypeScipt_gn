const DB = [];

function saveDB(user) {
  //   const oldDBSize = DB.length;
  const oldDBSize = DB.length + 1; // 오류발생시키기

  DB.push(user);
  console.log(`save ${user.name} to DB`);
  return new Promise((resolve, reject) => {
    if (DB.length > oldDBSize) {
      resolve(user);
    } else {
      reject(new Error("DB save failed"));
    }
  });
}

function sendEmail(user) {
  console.log(`email to ${user.email}`);
  return Promise.resolve(user);
}

function getResult(user) {
  return new Promise((resolve, reject) => {
    resolve(`success register ${user.name}`);
  });
}

function registerByPromise(user) {
  const result = saveDB(user)
    .then(sendEmail)
    .then(getResult)
    .catch((error) => new Error(error)) //catch error는 오류처리
    .finally(() => console.log("완료"));
  console.log(result);
  return result;
}

const myUser = { email: "andy@test.com", password: "password", name: "andy" };
const result = registerByPromise(myUser);
result.then(console.log);

allResult = Promise.all([saveDB(myUser), sendEmail(myUser), getResult(myUser)]);
allResult.then(console.log);
