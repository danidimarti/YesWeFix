const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shopSchema = new Schema(
  {
    repairtype: String,
    shopname: String,
    user : {type : mongoose.SchemaTypes.ObjectId, ref: 'User'}
    // streetname: String,
    // postcode: String,
    // city: String,
    // state: String,
    // country: String,
    // kvk: Number
   
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Shop = mongoose.model("Shop", shopSchema);
module.exports = Shop;
