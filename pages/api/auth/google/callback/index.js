import passport from "../../../../../lib/passport";

export default (req, res) => {
  return passport.authenticate('google', { failureRedirect: '/' }, function (err, user) {
    res.writeHead(302, {
      'Set-Cookie': [`auth=${JSON.stringify(user)}`],
      Location: "/",
    }).end();
  })(req, res);
};