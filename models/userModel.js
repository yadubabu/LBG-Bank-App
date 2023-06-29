const mongoose = require("mongoose");

const RegisterSchema = mongoose.Schema({
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
  password: {
    type: String,
    required: true,
  },
  confirmpassword: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("RegisterSchema", RegisterSchema);
