const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const equipEmpSchema = new Schema({
    _id: Number,
    emp_id: Number,
    assign_date: {
        type: Date,
        default: Date.now,
      },
}, { _id: false });

module.exports = mongoose.model("EquipEmp", equipEmpSchema);
