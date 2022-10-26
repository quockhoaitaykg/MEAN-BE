const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var autoIncrement = require("mongoose-auto-increment");

const equipmentSchema = new Schema({
  name: String,
  status: Boolean,
  description: String,
  type: [{ type: Schema.Types.ObjectId, ref: "Type" }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

autoIncrement.initialize(mongoose.connection);
equipmentSchema.plugin(autoIncrement.plugin, "Equipment");

module.exports = mongoose.model("Equipment", equipmentSchema);
