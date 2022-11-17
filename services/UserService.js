const userModel = require("../models/Users");

exports.getAllUsers = async () => {
  return await userModel.find();
};

exports.createUser = async (p) => {
  return await userModel.create(p);
};

exports.getUserById = async (id) => {
  return await userModel.findById(id);
};

exports.getUserByEmail = async (email) => {
  return await userModel.findOne(email);
};
