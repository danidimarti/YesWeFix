const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
    firstname : String,
    lastname : String,
    mobile : String,
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