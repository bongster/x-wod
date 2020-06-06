import passport from "../../../../../lib/passport";

export default (req, res) => {
  return passport.authenticate('google', { failureRedirect: '/' }, function () {
    res.writeHead(302, {Location: "/"}).end();
  })(req, res);
};