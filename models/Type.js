const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');
 
const typeSchema = new Schema({
  name: String,
  isActive: Boolean,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

autoIncrement.initialize(mongoose.connection);
typeSchema.plugin(autoIncrement.plugin, "Type")
 
module.exports = mongoose.model("Type", typeSchema);