const typeModel = require("../models/Type");

exports.getAllTypes = async () => {
  return await typeModel.find();
};

exports.createType = async (p) => {
  return await typeModel.create(p);
};
exports.getTypeyId = async (id) => {
  return await typeModel.findById(id);
};

exports.updateType = async (id, p) => {
  return await typeModel.findByIdAndUpdate(id, p);
};

exports.deleteType = async (id) => {
  return await typeModel.findByIdAndDelete(id);
};
