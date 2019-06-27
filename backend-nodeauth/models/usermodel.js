const mongoose = require('mongoose');
// require('mongoose-type-email');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
    username : String,
    mobile : String,
    shop : {type : mongoose.SchemaTypes.ObjectId, ref: 'Shop'},
    request : {type : mongoose.SchemaTypes.ObjectId, ref: 'Request'},
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