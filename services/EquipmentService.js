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

exports.updateEquipment= async (id, p) => {
  return await equipmentModel.findByIdAndUpdate(id, p);
};

exports.deleteEquipment = async (id) => {
  return await equipmentModel.findByIdAndDelete(id);
};
