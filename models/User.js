const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      min: 3,
      max: 20,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      max: 50,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      min: 6,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);
