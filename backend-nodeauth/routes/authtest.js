// Get route => to get Deal info

router.get('/user/deal', (req, res, next) => {
   
  if(req.isAuthenticated()) {

    const id = req.user._id;
    console.log(id);

    Deal.find({'userId' : id}).then ((result) => {
        console.log(result);
        const id = result[0].quoteId;
        console.log(id);
        const idu = result[0].userId;
    )}
        .catch (err => {
          res.status(500).json({ message: "Something went wrong"})
        
        })

    Quote.find({'_id' : id}).then ((result) => {
        res.send(result);
      })
      .catch (err => {
        res.status(500).json({ message: "Something went wrong"})
      
      })
      Request.find({'userid' : idu}).then((result) => {
        res.send(result);
      })
      .catch (err => {
        res.status(500).json({ message: "Something went wrong"})
      
  
      })
      
    } else {
    res.json({message: "You are not logged in"})
  }

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


