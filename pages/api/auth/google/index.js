
import passport from "../../../../lib/passport";

export default (req, res) => {
  return passport.authenticate('google', { scope: ['profile', 'email'] })(req, res);
};