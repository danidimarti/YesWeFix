const express = require("express");
const passport = require('passport');
const router = express.Router();



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


// router.get("/user/login", (req, res, next) => {
//   res.render("auth/login", { "message": req.flash("error") });
// });

router.post('/user/login', (req, res, next) => {
  console.log(req.body)
  passport.authenticate('local', (err, theUser, info) => {
    if(err) {
      res.status(500).json({message: err})
      return
    }
  if(!theUser) {
    res.status(401).json(info)
    return
  }
  req.login(theUser, err => {
    if(err){
      res.status(500).json({message: err})
      return
    }
    res.status(200).json(theUser)
  })

  })(req, res, next)
})

// router.get("/user/signup", (req, res, next) => {
//   res.render("auth/signup");
// });

// Post route => to create new request

router.post("/user/request", (req, res, next) => {
  const subject = req.body.subject;
  const description = req.body.description;
  const imageUrl = req.body.imageUrl;
  const status = req.body.status;

  const newRequest = new Request ({
    subject,
    description,
    imageUrl,
    status
  })
  newRequest.save()
  .then(() => {
    res.status(200).json(newRequest);
  })
  .catch(err => {
    res.status(500).json({ message: "Something went wrong" })
  })
});

// Get route => to receive request

router.get("/shop/request", (req, res, next) => {
  // if shop is logged in the run and do a I find based on businessname
  Request.find().then((result) => {
   res.send(result);
  })
  .catch(err => { 
    res.status(500).json({ message: "Something went wrong" })
  })
})

// Post route => to create new user

router.post("/user/signup", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  const mobile = req.body.mobile;
  const email = req.body.email;
  console.log(email)
  debugger
  if (username === "" || password === "") {
    res.status(400).json({ message: "Username or password can't be empty" });
    return;
  }
  User.findOne({ "email": email }).then((result) => {     
    if(result){
      res.status(400).json({ message: "The email already exists" });
    } else {
      const salt = bcrypt.genSaltSync(bcryptSalt);
        const hashPass = bcrypt.hashSync(password, salt);
    
        const newUser = new User({
          username,
          password: hashPass,
          email,
          mobile
        });
        debugger
        console.log(newUser)
        newUser.save()
        .then(() => {
          res.status(200).json(newUser);
        })
        .catch(err => {
          res.status(500).json({ message: "Something went wrong" })
        })
      }
    })
});

router.get("/user/currentuser", (req, res, next) => {
  if(req.isAuthenticated()) {
    
    res.status(200).json(req.user);
    return
  }
  res.status(403).json({message: "unauthorized"})
})

router.get("/user/logout", (req, res) => {
  req.logout();
  res.status(200).json({message: "Logout successful"});
});

module.exports = router;

