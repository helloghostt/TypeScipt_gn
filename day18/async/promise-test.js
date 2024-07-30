const DB = [];

function saveDB(user) {
  const oldDBSize = DB.length;
  DB.push(user);
  console.log(`save ${user.name} to DB`);
  return new Promise((resolve, reject) => {
    if (oldDBSize < DB.length) {
      resolve(user);
    } else {
      reject(new Error("DB save failed"));
    }
  });
}

function sendEmail(user) {
  console.log(`email to ${user.email}`);
  return new Promise((resolve) => {
    resolve(user);
  });
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
    .catch((error) => new Error(error)); //catch error는 오류처리
  console.log(result);
  return result;
}

const myUser = { email: "andy@test.com", password: "password", name: "andy" };
// const result = registerByPromise(myUser);
// result.then(console.log);

// Output:
// save andy to DB
// Promise { <pending> }
// email to andy@test.com
// success register andy

allResult = Promise.all([saveDB(myUser), sendEmail(myUser), getResult(myUser)]);
allResult.then(console.log);

// Output:
// save andy to DB
// email to andy@test.com
// [
//   { email: 'andy@test.com', password: 'password', name: 'andy' },
//   { email: 'andy@test.com', password: 'password', name: 'andy' },
//   'success register andy'
// ]
