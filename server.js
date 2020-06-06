require("dotenv").config();

const express = require("express");
const http = require("http");
const next = require("next");
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const passport = require("./lib/passport");


const ApiRouter = express.Router();

ApiRouter.get("/api/auth/login", (req, res, next) => {
});

ApiRouter.get("/auth/callback", (req, res, next) => {
})

ApiRouter.get("/api/auth/google", passport.authenticate('google', { scope: ['profile', 'email'] }));
ApiRouter.get("/api/auth/google/callback", passport.authenticate('google', { failureRedirect: '/login' }), function (req, res) {
  res.redirect("/");
});

app.prepare().then(() => {
  const server = express();
  server.use(passport.initialize());
  server.use(passport.session());

  server.use(ApiRouter);
  server.get("*", handle);

  http.createServer(server).listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`);
  });
})

