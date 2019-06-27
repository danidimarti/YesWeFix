const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const quoteSchema = new Schema({
    requestId : [ { type : Schema.Types.ObjectId, ref: 'Request' } ],
    userId : [ { type : Schema.Types.ObjectId, ref: 'User' } ],  
    // requestId : String,
    shopId : [ { type : Schema.Types.ObjectId, ref: 'Shop'}],
    quote : Number,
    timetofix : String,
    status: {
      type: String,
      enum: ["sent", "sentback", "accepted", 'closed']
    },
}, {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    }
  });
  
  const Quote = mongoose.model('Quote', quoteSchema);
  module.exports = Quote;