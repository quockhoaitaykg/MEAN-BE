const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');
 
const employeeSchema = new Schema({
  name: String,
  status: Boolean,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

autoIncrement.initialize(mongoose.connection);
employeeSchema.plugin(autoIncrement.plugin, "Employee")
 
module.exports = mongoose.model("Employee", employeeSchema);