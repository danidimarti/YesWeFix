const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shopSchema = new Schema(
  {
    repairtype: Array,
    shopname: String,
    user : {type : mongoose.SchemaTypes.ObjectId, ref: 'User'},
    streetname: String,
    postcode: String,
    city: String,
    lat: Number,
    lng: Number,
    description: String,
    email: String,
    imageUrl: String
   
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
