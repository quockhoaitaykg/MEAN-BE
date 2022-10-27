const empModel = require("../models/Employee");

exports.getAllEmployees = async () => {
  return await empModel.find();
};

exports.createEmployee = async (p) => {
  return await empModel.create(p);
};

exports.getEmployeeById = async (id) => {
  return await empModel.findById(id);
};

exports.updateEmployee = async (id, p) => {
  return await empModel.findByIdAndUpdate(id, p);
};

exports.deleteEmployee = async (id) => {
  return await empModel.findByIdAndDelete(id);
};
