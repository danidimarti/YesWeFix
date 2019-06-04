const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shopSchema = new Schema(
  {
    businessname: String,
    firstname: String,
    lastnanme: String,
    username: String,
    password: String,
    role: {
      type: String,
      enum: ["Owner", "General Manager", "Marketer", "Assitant", "Apprentice"]
    },
    
      streetname: String,
      postcode: String,
      city: String,
      state: String,
      country: String,
 
    phonenumber: String,
    kvk: Number,
    repairtype: String
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
