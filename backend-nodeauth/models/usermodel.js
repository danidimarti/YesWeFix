const mongoose = require('mongoose');
// require('mongoose-type-email');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
    firstname : String,
    mobile : String,
    // email : {
    //   home : {type: mongoose.SchemaTypes.Email, required: true}
    // },
    email : String,
    password  : String
}, {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    }
  });
  
  const User = mongoose.model('User', userSchema);
  module.exports = User;