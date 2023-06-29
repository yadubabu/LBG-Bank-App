const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  pancard: {
    type: String,
    required: true,
  },
  bankName: {
    type: String,
    required: true,
  },
  AccountType: {
    type: String,
    required: true,
  },
  FixedDeposits: {
    type: Number,
    required: true,
  },
  Balance: {
    type: Number,
    required: true,
  },
});
module.exports = mongoose.model("Accounts", AccountSchema);
