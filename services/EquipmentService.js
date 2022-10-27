const equipmentModel = require("../models/Equipment");

exports.getAllEquipments = async () => {
  return await equipmentModel.find();
};

exports.createEquipment = async (p) => {
  return await equipmentModel.create(p);
};

exports.getEquipmentById = async (id) => {
  return await equipmentModel.findById(id);
};

// exports.updateType = async (id, p) => {
//   return await typeModel.findByIdAndUpdate(id, p);
// };

// exports.deleteType = async (id) => {
//   return await typeModel.findByIdAndDelete(id);
// };
