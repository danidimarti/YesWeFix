const express = require('express');
const router  = express.Router();
const User = require("../models/usermodel");
const Shop = require("../models/shopmodel");

/* GET home page */
router.get('/', (req, res, next) => {c
  res.render('index');
});

// Get Shops

router.get("/shops", (req, res, next) => {

  
        Shop.find().then ((result) => {
          res.send(result);
        })
      
        // User.find({'shop' : ""}).then ((result) => {
        //   res.send(result);
        // })

        
        .catch (err => {
          res.status(500).json({ message: "Something went wrong"})
        })
        
       
      
       
      
    });

module.exports = router;
