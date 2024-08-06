const passport = require("passport");
const local = require("./localStrategy");
const kakao = require("./kakaoStrategy");
const User = require("../models/user");
module.exports = () => {
  passport.serializeUser((user, done) => {
    //로그인 성공 시 사용자 정보 객체와 함께 req.login 호출
    done(null, user.id);
  }); //req.login 메서드가 passport.serializeUser 호출

  // 1. 모든 요청에 passport.session() 미들웨어가 passport.deserializeUser 메서드 호출
  // 2. req.session에 저장된 아이디로 데이터베이스에서 사용자 조회
  // 3. 조회된 사용자 정보를 req.user에 저장
  // 4. 라우터에서 req.user 객체 사용 가능

  passport.deserializeUser((id, done) => {
    User.findOne({ where: { id } })
      .then((user) => done(null, user))
      .catch((err) => done(err));
  });

  local();
  kakao();
};
