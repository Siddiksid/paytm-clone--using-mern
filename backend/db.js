const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:lELVN7F7XYSdZORR@cluster0.jijaf7h.mongodb.net/paytm"
);

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    trim: true,
    minLength: 3,
    maxLength: 30,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  firstName: {
    type: String,
    required: true,
    maxLength: 50,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    maxLength: 50,
    trim: true,
  },
});

const accountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
});

const Account = mongoose.model("Account", accountSchema);

const User = mongoose.model("User", userSchema);

module.exports = {
  Account,
  User,
};
