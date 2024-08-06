const passport = require("passport");
const KakaoStrategy = require("passport-kakao").Strategy;

const User = require("../models/user");

module.exports = () => {
  passport.use(
    new KakaoStrategy(
      {
        clientID: process.env.KAKAO_ID,
        callbackURL: "/auth/kakao/callback",
      }, // 인증 후 콜백 URL
      async (accessToken, refreshToken, profile, done) => {
        console.log("kakao profile", profile);

        try {
          // 기존 사용자 찾기
          const exUser = await User.findOne({
            where: { snsId: profile.id, provider: "kakao" },
          });
          if (exUser) {
            // 기존 사용자가 있다면 그대로 반환
            done(null, exUser);
          } else {
            // 새 사용자 생성
            const newUser = await User.create({
              email: profile._json?.kakao_account?.email, // 옵셔널 체이닝 사용
              nick: profile.displayName,
              snsId: profile.id,
              provider: "kakao",
            });
            done(null, newUser);
          }
        } catch (error) {
          console.error(error);
          done(error);
        }
      }
    )
  );
};
