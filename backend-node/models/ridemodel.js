const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const rideSchema = new Schema({
    transactionid : [ { type : Schema.Types.ObjectId, ref: 'Transaction' } ],
    messengerid : [ { type : Schema.Types.ObjectId, ref: 'Messenger' } ],
}, {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    }
  });
  
  const Ride = mongoose.model('Ride', rideSchema);
  module.exports = Ride;