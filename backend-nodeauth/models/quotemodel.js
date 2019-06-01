const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const quoteSchema = new Schema({
    requestid : [ { type : Schema.Types.ObjectId, ref: 'Request' } ],
    repairid : [ { type : Schema.Types.ObjectId, ref: 'Repair' } ],  
    price : Number,
    timetofix : String,
    status: {
      type: String,
      enum: ["sent", "accepted", 'closed']
    },
}, {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    }
  });
  
  const Quote = mongoose.model('Quote', quoteSchema);
  module.exports = Quote;