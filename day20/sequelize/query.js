// INSERT INTO nodejs.users (name, age, married, comment) VALUES ('zero', 24, 0, '자기소개1')
const { User } = require("../models");
User.create({
  name: "zero",
  age: 24,
  married: false,
  comment: "자기소개1",
});
// SELECT * FROM nodejs.users;
User.findAll({});

// SELECT name, married FROM nodejs.users;
User.findAll({
  attributes: ["name", "marride"],
});
