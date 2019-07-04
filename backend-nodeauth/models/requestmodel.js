const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const requestSchema = new Schema(
  {
    userid: { type: Schema.Types.ObjectId, ref: "User" },
    username: String,
    subject: String,
    description: String,
    //shop : String,
    shopId: { type: Schema.Types.ObjectId, ref: "Shop" },
    imageUrl: { type: String, required: true },
    status: {
      type: String,
      enum: ["sent", "accepted", "closed"]
    }
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    }
  }
);

const Request = mongoose.model("Request", requestSchema);
module.exports = Request;
