const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const dealSchema = new Schema({
    quoteId : [ { type : Schema.Types.ObjectId, ref: 'Quote' } ],
    userId : [ { type : Schema.Types.ObjectId, ref: 'User' } ],  
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
  
  const Deal = mongoose.model('Deal', dealSchema);
  module.exports = Deal;