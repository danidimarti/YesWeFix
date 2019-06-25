// test

// Post route => to create new request

router.post("/user/request", (req, res, next) => {

  if(req.isAuthenticated()) {

  const username = req.user.username;
  const shopname = req.body.shopname;
  const subject = req.body.subject;
  const description = req.body.description;
  const imageUrl = req.body.imageUrl;
  const status = "sent";

  

  const newRequest = new Request ({
    username,
    shopname,
    subject,
    description,
    imageUrl,
    status
  })
    
  console.log(newRequest);
  newRequest.save()
  .then(() => {
    res.status(200).json(newRequest);
  })
  .catch(err => {
    res.status(500).json({ message: "Something went wrong" })
  })

  } else {
    res.json({message: "You are not logged in"})
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


// border


router.post("/signup", (req, res, next) => {
  const shopname = req.body.shopname;
  const username = req.body.username;
  const password = req.body.password;
  const mobile = req.body.mobile;
  const email = req.body.email;
  const repairtype = req.body.repairtype;
  console.log(repairtype)
  debugger
  if (username === "" || password === "") {
    res.status(400).json({ message: "Username or password can't be empty" });
    return;
  }
  User.findOne({ "email": email }).then((result) => {     
    if(result){
      console.log(result);
      res.status(400).json({ message: "The email already exists" });
    } else {
      const salt = bcrypt.genSaltSync(bcryptSalt);
        const hashPass = bcrypt.hashSync(password, salt);
      if (repairtype !== undefined) {
         console.log(repairtype);
          const newShop = new Shop ({
              repairtype,
              shopname
          })

          debugger
          newShop.save()
          .then((shop)=> {
              console.log(shop)
            const newUser = new User ({
                  shop: shop._id,
                  username,
                  password: hashPass,
                  email,
                  mobile

              });
              console.log(newUser)
              return newUser.save()
          })
          .then(user => {
            console.log(user)
            return User.findById(user._id)
              .populate('shop')
          })
          .then(userShop => {
            res.status(200).json(userShop)
          })
          .catch(err => {
            console.log(err)
            res.status(500).json({ message: "Something went wrong" })
          })
      } else {
          const newUser = new User ({
              username,
              password: hashPass,
              email,
              mobile

          });
          // console.log(newUser);
          newUser.save()
          .then(user => {
            console.log(user);

            res.status(200).json(user)
            // return user;
            // return User.find(user)
          })
          .catch(err => {
            console.log(err)
            res.status(500).json({message: "Something went wrong"})
          })

      }
        
        
        
      }
    })

});

