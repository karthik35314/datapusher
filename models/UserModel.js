const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    userid: {
      type: Number,
      required: true,
      ref: "User",
      unique: true
    },
    username: {
      type: String,
      required: [true, "Please add the account name"],
    },
    email: {
      type: String,
      required: [true, "Please add the account email address"],
      unique: true
    },
    token: {
      type: String,
      required: [true, "Please add the token"],
    },
    website:{
      type: String,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);