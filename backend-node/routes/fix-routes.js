const express = require('express');
const mongoose = require('mongoose');
const router  = express.Router();

const User  = require('../models/usermodel');
const Repair = require('../models/shopmodel');
const Request = require('../models/requestmodel.js');
const Quote = require('../models/quotemodel');
const Transaction = require('../models/transactionmodel');
const Messenger = require('../models/messengermodel');
const Ride = require('../models/ridemodel');


// Post route => to create new user
router.post('./create-users', (req, res, next) =>{

    User.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        mobile: req.body.mobile,
        email: request.body.email,
        password: req.body.password
        
    })
    .then(response => {
        res.json(response);
    })
    .catch(err => {
        res.json(err);
    })

});

// Post route => to create repairshop

router.post('./create-shops', (req, res, next)=>{

    Repair.create({
        businessname: req.body.businessname,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        role: req.body.role,
        adress: req.body.adress,
        phonenumber : req.body.phonenumber,
        email : req.body.phonenumber,
        kvk : req.body.phonenumber,
        type : req.body.type,
        password  : req.body.password

        
    })

});

// Post route => to create requests

router.post('/create-requests', (req, res, next)=>{

    Request.create({
        description : req.body.description,
        // photo : // ? 
       status: "sent"
    })
});


// Post route => to create quotes

router.post('/create-quotes', (req, res, next)=>{

    Quote.create({
    description : req.body.description,
    // photo : Buffer,  //?
    price : req.body.price,
    timetofix : req.body.timetofix,
    status : req.body.status,
    transactiondate : req.body.transactiondate,
    pickupaddress : req.body.pickupaddress,
    dropoffaddress : req.body.dropoffaddress
    })

});


module.exports = router;