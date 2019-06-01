const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const messengerSchema = new Schema({
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
  
  const Messenger = mongoose.model('Messenger', messengerSchema);
  module.exports = Messenger;