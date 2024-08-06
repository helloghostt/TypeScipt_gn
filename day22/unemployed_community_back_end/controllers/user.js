const { User } = require("../models");

exports.follow = async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { id: req.user.id } });
    if (user) {
      await user.addFollowing(parseInt(req.params.id), 10);
      res.send("success");
    } else {
      //에러처리
      res.status(404).send("User not found");
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
};
