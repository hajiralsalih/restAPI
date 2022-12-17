const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schema user

const userSchema = new Schema({
   firstName: {
    type: String,
    required: true,
  },
  
   lastName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: false,
  },
});
// create and export user model
const User = mongoose.model("User", userSchema);

module.exports = User;  