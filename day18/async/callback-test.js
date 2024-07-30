const DB = [];

//회원가입 api함수

function register(user) {
  return saveDB(user, function (user) {
    return sendEmail(user, function (user) {
      return getResult(user);
    });
  });
}
function saveDB(user, callback) {
  DB.push(user);
  console.log(`save ${user.name} to DB`);
  return callback(user);
}
function sendEmail(user, callback) {
  console.log(`Email to ${user.email}`);
  return callback(user);
}

function getResult(user) {
  return `회원가입 성공 ${user.name}`;
}

const result = register({
  email: "andy@test.com",
  password: "password",
  name: "andy",
});
console.log("result");
