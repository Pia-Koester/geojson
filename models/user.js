const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  email: { type: String, unique: true, required: true },
  name: { type: String, required: true },
  phoneNumber: { type: String, unique: true, required: true },
});

const User = model("User", userSchema);

module.exports = User;
