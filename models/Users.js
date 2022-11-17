const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');
 
const userSchema = new Schema({
  email: String,
  password: String,
  token: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, "Users")
 
module.exports = mongoose.model("Users", userSchema);
