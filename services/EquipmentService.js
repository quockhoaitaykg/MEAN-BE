const equipmentModel = require("../models/Equipment");

exports.getAllEquipments = async () => {
  return await equipmentModel.find().populate("type");
};

exports.createEquipment = async (p) => {
  return await equipmentModel.create(p);
};

// exports.getTypeById = async (id) => {
//   return await typeModel.findById(id);
// };

// exports.updateType = async (id, p) => {
//   return await typeModel.findByIdAndUpdate(id, p);
// };

// exports.deleteType = async (id) => {
//   return await typeModel.findByIdAndDelete(id);
// };
