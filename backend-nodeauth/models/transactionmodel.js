const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const transactionSchema = new Schema({
  requestid : [ { type : Schema.Types.ObjectId, ref: 'Request' } ],
  repairid : [ { type : Schema.Types.ObjectId, ref: 'Repair' } ],  
  pickuplocation : String,
  Idealreference : Number
    
  }, {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    }
  });
  
  const Transaction = mongoose.model('Transaction', transactionSchema);
  module.exports = Transaction;