// const express = require("express");
// const mongoose = require("mongoose");
// const router = express.Router();



// // Bcrypt to encrypt passwords
// const bcrypt = require("bcrypt");
// const bcryptSalt = 10;

// // Post route => to create new user
// router.post("/user/signup", (req, res, next) => {
//   const username = req.body.username;
//   const password = req.body.password;
//   const mobile = req.body.mobile;
//   const email = request.body.email;

//   if (username === "" || password === "") {
//     res.status(400).json({ message: "Username or password can't be empty" });
//     return;
//   }
//   User.findOne({ username }, "username", (err, user) => {
//     if (user !== null) {
//       res.status(400).json({ message: "The username already exists" });
//       return;
//     }

    // const salt = bcrypt.genSaltSync(bcryptSalt);
    // const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password: hashPass,
      mobile,
      email
    });

    newUser.save().then(() => {
      //! newUser info in postman headers.
      res.status(200).json(newUser);
    })
    .catch(err => {
        res.status(500).json({ message: "Something went wrong" })
        //res.render("auth/signup", { message: "Something went wrong" });
      })
  })
})

// router.get("/user/currentuser", (req, res, next) => {
//   if(req.isAuthenticated()) {
//     res.status(200).json(req.user);
//     return
//   }
//   res.status(403).json({message: "unauthorized"})
// })

  // router.get("/user/signup", (req, res, next) => {
  //   res.render("auth/user/signup");
  // });
    // User.create({
    //     firstname: req.body.firstname,
    //     lastname: req.body.lastname,
    //     mobile: req.body.mobile,
    //     email: request.body.email,
    //     password: req.body.password

    // })

//     .then(response => {
//       res.json(response);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// Post route => to create repairshop

// router.post("/create-shops", (req, res, next) => {
//   Repair.create({
//     businessname: req.body.businessname,
//     firstname: req.body.firstname,
//     lastname: req.body.lastname,
//     role: req.body.role,
//     adress: req.body.adress,
//     phonenumber: req.body.phonenumber,
//     email: req.body.phonenumber,
//     kvk: req.body.phonenumber,
//     type: req.body.type,
//     password: req.body.password
//   });
// });

// Post route => to create requests

// router.post("/create-requests", (req, res, next) => {
//   Request.create({
//     description: req.body.description,
//     // photo : // ?
//     status: "sent"
//   });
// });

// Post route => to create quotes

// router.post("/create-quotes", (req, res, next) => {
//   Quote.create({
//     description: req.body.description,
//     // photo : Buffer,  //?
//     price: req.body.price,
//     timetofix: req.body.timetofix,
//     status: req.body.status,
//     transactiondate: req.body.transactiondate,
//     pickupaddress: req.body.pickupaddress,
//     dropoffaddress: req.body.dropoffaddress
//   });
// });

module.exports = router
