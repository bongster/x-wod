import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

const GOOGLE_CLIENT_ID = "1097064138850-8gm6jcqev4fpqi17eskj6jjf94n4ge42.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "wytrCIP-Uxv-5XkFXBLTmahP";

passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "/api/auth/google/callback"
},
  function (token, tokenSecret, profile, done) {
    return done(null, {
      token,
      tokenSecret,
      profile,
    });
  })
)


export default passport;