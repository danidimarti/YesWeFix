const express = require("express");
const passport = require("passport");
const router = express.Router();

const User = require("../models/usermodel.js");
const Shop = require("../models/shopmodel.js");
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

router.post("/login", (req, res, next) => {
  console.log(req.body);
  passport.authenticate("local", (err, theUser, info) => {
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

// router.get("/user/signup", (req, res, next) => {
//   res.render("auth/signup");
// });

// Post route => to create new request

router.post("/user/request", (req, res, next) => {
  if (req.isAuthenticated()) {
    const username = req.user.username;
    const shop = req.body.shop;
    const subject = req.body.subject;
    const description = req.body.description;
    const imageUrl = req.body.imageUrl;
    const status = "sent";

    const newRequest = new Request({
      username,
      shop,
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
  } else {
    res.json({ message: "You are not logged in" });
  }

  // const subject = req.body.subject;
  // const description = req.body.description;
  // const imageUrl = req.body.imageUrl;
  // const status = "sent";

  // const newRequest = new Request ({
  //   username,
  //   subject,
  //   description,
  //   imageUrl,
  //   status
  // })
  // console.log(newRequest);
  // newRequest.save()
  // .then(() => {
  //   res.status(200).json(newRequest);
  // })
  // .catch(err => {
  //   res.status(500).json({ message: "Something went wrong" })
  // })
});

// Get route => to receive request

router.get("/shop/request", (req, res, next) => {
  console.log(req.user);
  // if shop is logged in then show list of all request with the last ones on top

  // User.find({'username':'test14' }, 'email createdAt').then((result) => {
  //   res.send(result);
  //  })
  //  .catch(err => {
  //    res.status(500).json({ message: "Something went wrong" })
  //  })

  if (req.isAuthenticated()) {
    const id = req.user._id;
    const shopId = req.user.shop;
    console.log(shopId);

    Request.find({ shop: shopId })
      .then(result => {
        res.send(result);
      })

      // Request.findById({'shop' : id}, 'shopname description imageUrl username status createdAt').then((result) => {
      //   res.send(result);

      // })
      .catch(err => {
        res.status(500).json({ message: "Something went wrong" });
      });
    // User.find({'username' : req.user.username}, 'username email createdAt').then((result) =>  {
    //   res.send(result);
    //  })
    //  .catch(err => {
    //    res.status(500).json({ message: "Something went wrong" })
    //  })
  }
});

// Post route => to create new shop

// router.post("/shop/signup", (req, res, next) => {
//   const username = req.body.username;
//   const password = req.body.password;
//   const mobile = req.body.mobile;
//   const email = req.body.email;
//   const repairtype = req.body.repairtype;
//   // const repairtype = req.body.repairtype;
//   console.log(email);
//   //debugger;
//   if (username === "" || password === "") {
//     res.status(400).json({ message: "Username or password can't be empty" });
//     return;
//   }
//   User.findOne({ email: email }).then(result => {
//     if (result) {
//       res.status(400).json({ message: "The email already exists" });
//     } else {
//       const salt = bcrypt.genSaltSync(bcryptSalt);
//       const hashPass = bcrypt.hashSync(password, salt);

//       const newUser = new User({
//         username,
//         password: hashPass,
//         email,
//         mobile
//       });
//       const newShop = new Shop({
//         repairtype
//       });
//       debugger;
//       console.log(newShop);

//       newUser
//         .save()
//         .then(() => {
//           res.status(200).json(newUser);
//         })
//         .catch(err => {
//           res.status(500).json({ message: "Something went wrong" });
//         });
//     }
//   });
// });

// Post route => to logon shop

router.post("/shop/login", (req, res, next) => {
  console.log(req.body);
  passport.authenticate("local", (err, theUser, info) => {
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

// Post route => to create new user

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

        newShop
          .save()
          .then(shop => {
            console.log(shop);
            const newUser = new User({
              shop: shop._id,
              username,
              password: hashPass,
              email,
              shopname,
              streetname,
              mobile,
              repairtype,
              description,
              imageUrl
            });
            console.log(newUser);
            return newUser.save();
          })
          .then(user => {
            console.log(user);
            return User.findById(user._id).populate("shop");
          })
          .then(userShop => {
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
        // console.log(newUser);
        newUser
          .save()
          .then(user => {
            console.log(user);

            res.status(200).json(user);
            // return user;
            // return User.find(user)
          })
          .catch(err => {
            console.log(err);
            res.status(500).json({ message: "Something went wrong" });
          });
      }
    }
  });
});

//Get all shops
router.get("/shops", (req, res, next) => {
  debugger
  Shop.find({})
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.status(500).json({ message: "Cannot Fetch Shops", err });
    });
});

// ookborder

// router.post("/user/signup", (req, res, next) => {
//   const username = req.body.username;
//   const password = req.body.password;
//   const mobile = req.body.mobile;
//   const email = req.body.email;
//   const repairtype = req.body.repairtype;
//   console.log(repairtype)
//   debugger
//   if (username === "" || password === "") {
//     res.status(400).json({ message: "Username or password can't be empty" });
//     return;
//   }
//   User.findOne({ "email": email }).then((result) => {
//     if(result){
//       res.status(400).json({ message: "The email already exists" });
//     } else {
//       const salt = bcrypt.genSaltSync(bcryptSalt);
//         const hashPass = bcrypt.hashSync(password, salt);

//         const newShop = new Shop ({
//             repairtype
//         })

//         debugger
//         newShop.save()
//         .then((shop)=> {
//             console.log(shop)
//           const newUser = new User ({
//                 shop: shop._id,
//                 username,
//                 password: hashPass,
//                 email,
//                 mobile

//             });
//             return newUser.save()
//         })
//         .then(user => {
//           console.log(user)
//           return User.findById(user._id)
//             .populate('shop')
//         })
//         .then(userShop => {
//           res.status(200).json(userShop)
//         })
//         .catch(err => {
//           console.log(err)
//           res.status(500).json({ message: "Something went wrong" })
//         })

//       }
//     })

// });

//border

// router.post("/user/signup", (req, res, next) => {
//   const username = req.body.username;
//   const password = req.body.password;
//   const mobile = req.body.mobile;
//   const email = req.body.email;
//   const repairtype = req.body.repairtype;
//   console.log(repairtype)
//   debugger
//   if (username === "" || password === "") {
//     res.status(400).json({ message: "Username or password can't be empty" });
//     return;
//   }
//   User.findOne({ "email": email }).then((result) => {
//     if(result){
//       res.status(400).json({ message: "The email already exists" });
//     } else {
//       const salt = bcrypt.genSaltSync(bcryptSalt);
//         const hashPass = bcrypt.hashSync(password, salt);

//         const newUser = new User({
//           username,
//           password: hashPass,
//           email,
//           mobile
//         });

//         debugger
//         newUser.save()
//         .then((user) => {
//           console.log(user)

//           const newShop = new Shop({
//             user: user._id,
//             repairtype
//           });

//           return newShop.save()
//           // res.status(200).json(newUser);
//         })
//         .then(shop => {
//           console.log(shop)
//           return Shop.findById(shop._id)
//             .populate('user')
//         })
//         .then(userShop => {
//           res.status(200).json(userShop)
//         })
//         .catch(err => {
//           console.log(err)
//           res.status(500).json({ message: "Something went wrong" })
//         })

//         // newShop.save()
//         // .then(() => {
//         //   res.status(200).json(newShop);
//         // })
//         // .catch(err => {
//         //   res.status(500).json({ message: "Something went wrong" })
//         // })

//       }
//     })
// });

router.get("/user/currentuser", (req, res, next) => {
  if (req.isAuthenticated()) {
    res.status(200).json(req.user);
    return;
  }
  res.status(403).json({ message: "unauthorized" });
});

router.get("/user/logout", (req, res) => {
  req.logout();
  res.status(200).json({ message: "Logout successful" });
});

module.exports = router;
