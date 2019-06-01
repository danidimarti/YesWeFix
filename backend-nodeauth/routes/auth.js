const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");

const User = require("../models/usermodel");
const Repair = require("../models/shopmodel");
const Request = require("../models/requestmodel.js");
const Quote = require("../models/quotemodel");
const Transaction = require("../models/transactionmodel");
const Messenger = require("../models/messengermodel");
const Ride = require("../models/ridemodel");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;


router.get("/login", (req, res, next) => {
  res.render("auth/login", { "message": req.flash("error") });
});

router.post("/login", passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/auth/login",
  failureFlash: true,
  passReqToCallback: true
}));

router.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

// Post route => to create new user
router.post("/user/signup", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  const mobile = req.body.mobile;
  const email = request.body.email;

  if (username === "" || password === "") {
    res.status(400).json({ message: "Username or password can't be empty" });
    return;
  }
  User.findOne({ username }, "username", (err, user) => {
    if (user !== null) {
      res.status(400).json({ message: "The username already exists" });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password: hashPass,
      mobile,
      email
    });

    newUser.save()
    .then(() => {
      res.status(200).json(newUser);
    })
    .catch(err => {
      res.status(500).json({ message: "Something went wrong" })
    })
  });
});

router.get("/user/currentuser", (req, res, next) => {
  if(req.isAuthenticated()) {
    res.status(200).json(req.user);
    return
  }
  res.status(403).json({message: "unauthorized"})
})

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;

