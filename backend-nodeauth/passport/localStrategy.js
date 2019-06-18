const passport      = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User          = require('../models/usermodel');
const Shop          = require('../models/shopmodel');
const bcrypt        = require('bcrypt');

passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    mobileField: 'mobile',
    emailField: 'email'
  }, 
  (username, password, done) => {

    User.findOne({ username })
    .then(foundUser => {
      if (!foundUser) {
        done(null, false, { message: 'Incorrect username' });
        return;
      }

      if (!bcrypt.compareSync(password, foundUser.password)) {
        done(null, false, { message: 'Incorrect password' });
        return;
      }

      done(null, foundUser);
    })
    .catch(err => done(err));
  }
))

    // test

   


  



//test

// passport.use(new LocalStrategy({
//   usernameField: 'username',
//   passwordField: 'password',
//   mobileField: 'mobile',
//   emailField: 'email'
// }, 
// (username, password, done) => {
//   Shop.findOne({ username })
//   .then(foundUser => {
//     if (!foundUser) {
//       done(null, false, { message: 'Incorrect username' });
//       return;
//     }

//     if (!bcrypt.compareSync(password, foundUser.password)) {
//       done(null, false, { message: 'Incorrect password' });
//       return;
//     }

//     done(null, foundUser);
//   })
//   .catch(err => done(err));
// }




// ))
