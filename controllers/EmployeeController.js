const empService = require("../services/EmployeeService");

exports.getAllEmployees = async (req, res) => {
  try {
    const types = await empService.getAllEmployees();
    res.json({ data: types, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createEmployee = async (req, res) => {
  try {
    const type = await empService.createEmployee(req.body);
    res.json({ data: type, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getEmployeeById = async (req, res) => {
  try {
    const type = await empService.getEmployeeById(req.params.id);
    res.json({ data: type, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.updateEmployee = async (req, res) => {
  try {
    const type = await empService.updateEmployee(req.params.id, req.body);
    res.json({status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.deleteEmployee = async (req, res) => {
  try {
    const type = await empService.deleteEmployee(req.params.id);
    res.json({status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
