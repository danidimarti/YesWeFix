const express = require("express");
const passport = require("passport");

const router = express.Router();
const mongoose = require("mongoose");

const User = require("../models/usermodel.js");
const Shop = require("../models/shopmodel.js");
const Request = require("../models/requestmodel.js");
const Quote = require("../models/quotemodel");
const Deal = require("../models/deal");
const Transaction = require("../models/transactionmodel");
const Messenger = require("../models/messengermodel");
const Ride = require("../models/ridemodel");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

//test new post login

router.post("/login", (req, res, next) => {

  console.log(req.body);
  passport.authenticate("local", (err, theUser, info) => {
    console.log(info);
    console.log(theUser);
    console.log(err);

    if (err) {
      res.status(500).json({ message: err });
      return;
    }
    if (!theUser) {
      res.status(401).json(info);
      return;
    }
    req.login(theUser, err => {
      if (err) {
        res.status(500).json({ message: err });
        return;
      }
      res.status(200).json(theUser);
    });
  })(req, res, next);
});

// post login

// router.post("/login", (req, res, next) => {
//   console.log(req.body);
//   passport.authenticate("local", (err, theUser, info) => {
//     if (err) {
//       res.status(500).json({ message: err });
//       return;
//     }
//     if (!theUser) {
//       res.status(401).json(info);
//       return;
//     }
//     req.login(theUser, err => {
//       if (err) {
//         res.status(500).json({ message: err });
//         return;
//       }
//       res.status(200).json(theUser);
//     });
//   });
// });

// Post route => create quote

router.post("/shop/quote", (req, res, next) => {
  console.log(req.user);

  // if(req.isAuthenticated()) {
  const shopId = req.body.shopId;
  const requestId = req.body.requestId;
  const userId = req.body.userId;
  const quote = req.body.quote;
  const timetofix = req.body.timetofix;
  const status = "sentback";

  console.log(quote);

  const newQuote = new Quote({
    shopId,
    requestId,
    userId,
    quote,
    timetofix,
    status
  });
  console.log(newQuote);
  newQuote
    .save()
    .then(() => {
      res.status(200).json(newQuote);
    })
    .catch(err => {
      res.status(500).json({ message: "Something went wrong" });
    });

  // } else {
  //   res.json({message: "You are not logged in"})
  // }
});

// Post route => to create new request

router.post("/request", (req, res, next) => {
  Shop.findById(req.body.shopId).then(result => {
    res.send(result);
    console.log("Found Shop Id", result);
  });
  User.findById(req.body.userId).then(result => {
    res.send(result);
    console.log("Found User Id", result);
  });

  const userid = req.body.userId;
  const shopid = req.body.shopId;

  const subject = req.body.subject;
  const description = req.body.description;
  const imageUrl = req.body.imageUrl;
  const status = "sent";

  const newRequest = new Request({
    //username,
    userid,
    shopid,
    subject,
    description,
    imageUrl,
    status
  });
  console.log(newRequest);
  newRequest
    .save()
    .then(() => {
      res.status(200).json(newRequest);
    })
    .catch(err => {
      res.status(500).json({ message: "Something went wrong" });
    });
  // } else {
  //   res.json({ message: "You are not logged in" });
  // }
});

// Get route => to get Deal info

router.get("/user/deal", (req, res, next) => {
  if (req.isAuthenticated()) {
    const id = req.user._id;
    console.log(id);

    Deal.find({ userId: id })
      .then(result => {
        // res.send(result)
        console.log(result);
        // const id = result[0].quoteId
        // console.log(id);
        const idu = result[0].userId;
        console.log(idu);
        // Quote.find({'_id' : id}).then ((result) => {
        //   res.send(result);
        // })
        Request.find({ userid: idu }).then(result => {
          res.send(result);
          console.log(result);
        });
      })

      .catch(err => {
        res.status(500).json({ message: "Something went wrong" });
      });
  } else {
    res.json({ message: "You are not logged in" });
  }
});

// Post route => to accept quote

router.post("/user/accept", (req, res, next) => {
  console.log(req.user);

  // if shop is logged in then show list of all request with the last ones on top

  // User.find({'username':'test14' }, 'email createdAt').then((result) => {
  //   res.send(result);
  //  })
  //  .catch(err => {
  //    res.status(500).json({ message: "Something went wrong" })
  //  })

  //  if (req.isAuthenticated()) {
  //  const id = req.user._id;
  //const shopId = req.user.shop;
  //console.log(shopId);

  if (req.isAuthenticated()) {
    const quoteId = req.body._id;

    Quote.findOneAndUpdate({ _id: quoteId }, { status: "accepted" })

      .then(newDeal => {
        res.status(200).json(newDeal);
        console.log(newDeal);
      })
      .catch(err => {
        res.status(500).json({ message: "Something went wrong" });
      });
  } else {
    res.json({ message: "You are not logged in" });
  }
});

// Get route => to receive quote

router.get("/user/quote", (req, res, next) => {
  console.log(req.user);

  if (req.isAuthenticated()) {
    const id = req.user._id;
    // const shopId = req.user.shop
    console.log(id);

    Quote.find({ userId: id })
      .then(result => {
        res.send(result);
      })

      .catch(err => {
        res.status(500).json({ message: "Something went wrong" });
      });
  }
});

// Get route => to receive requests from one user

router.get("/user/request", (req, res, next) => {
  console.log(req.user);

  // if(req.isAuthenticated()) {

  // const id = req.user._id;
  const id = "5d126d83162e7011d17597a8";

  Request.find({ userid: id })
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.status(500).json({ message: "Something went wrong" });
    });
});

// Get route => to receive requests from one shop

router.get("/shop/request", (req, res, next) => {
  console.log(req.user);
  const shopId = "5d126c03a66c9111670b9075";
  // const shopId = req.user.shop
  console.log(shopId);

  Request.find({ shop: shopId })
    .then(result => {
      res.send(result);
    })

    .catch(err => {
      res.status(500).json({ message: "Something went wrong" });
    });
});

router.post("/signup", (req, res, next) => {
  const shopname = req.body.shopname;
  const username = req.body.username;
  const password = req.body.password;
  const mobile = req.body.mobile;
  const email = req.body.email;
  const repairtype = req.body.repairtype;
  const streetname = req.body.streetname;
  const description = req.body.description;
  const imageUrl = req.body.imageUrl;
  const lat = req.body.lat;
  const lng = req.body.lng;

  if (username === "" || password === "") {
    res.status(400).json({ message: "Username or password can't be empty" });
    return;
  }
  User.findOne({ email: email }).then(result => {
    if (result) {
      console.log(result);
      res.status(400).json({ message: "The email already exists" });
    } else {
      const salt = bcrypt.genSaltSync(bcryptSalt);
      const hashPass = bcrypt.hashSync(password, salt);
      if (repairtype !== undefined) {
        console.log(repairtype);
        const newShop = new Shop({
          shopname,
          streetname,
          mobile,
          repairtype,
          description,
          imageUrl,
          email,
          username,
          password,
          lat,
          lng
        });
        console.log("new shop is HERE", newShop);
        newShop
          .save()
          .then(shop => {
            console.log("new shop registered", shop);
            const newUser = new User({
              shop: shop._id,
              username,
              password: hashPass,
              email,
              mobile
            });
            console.log("New User-Shop Registered:", newUser);
            return newUser.save();
          })
          .then(user => {
            console.log(user);
            return User.findById(user._id).populate("shop");
          })
          .then(userShop => {
            console.log("usershop", userShop);
            res.status(200).json(userShop);
          })
          .catch(err => {
            console.log(err);
            res.status(500).json({ message: "Something went wrong" });
          });
      } else {
        const newUser = new User({
          username,
          password: hashPass,
          email,
          mobile
        });
        newUser
          .save()
          .then(user => {
            console.log("New User-Consumer Registered", user);
            res.status(200).json(user);
          })
          .catch(err => {
            console.log(err);
            res.status(500).json({ message: "Something went wrong" });
          });
      }
    }
  });
});

router.get("/login", (req, res, next) => {
  res.render("auth/login", { message: req.flash("error") });
});

//GET ALL SHOPS BELOW
router.get("/results", (req, res, next) => {
  Shop.find()
    .then(result => {
      res.send(result);
      console.log("results from b.e.", result);
    })
    .catch(err => {
      res.status(500).json({ message: "Cannot Fetch Shops", err });
    });
});

//GET ONE SHOP IN HERE
router.get("/results/:shopId", (req, res, next) => {
  Shop.findById(req.params.shopId)
    .then(result => {
      res.send(result);
      console.log("results from b.e.", result);
    })
    .catch(err => {
      res.status(500).json({ message: "Cannot Fetch Shops", err });
    });
});

//GET PROFILE HERE
router.get("/currentuser", (req, res, next) => {
  if (req.isAuthenticated()) {
    
    res.status(200).json(req.user);
    return;
  }
  res.status(403).json({ message: "unauthorized" });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.status(200).json({ message: "Logout successful" });
});

module.exports = router;

