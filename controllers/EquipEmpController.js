const equipEmpService = require("../services/EquipEmpService");

exports.getAll = async (req, res) => {
  try {
    const types = await equipEmpService.getAll();
    res.json({ data: types, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createEquipEmp = async (req, res) => {
  try {
    const type = await equipEmpService.create(req.body);
    res.json({ data: type, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const type = await equipEmpService.getById(req.params.id);
    res.json({ data: type, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
// exports.updateType = async (req, res) => {
//   try {
//     const type = await typeService.updateType(req.params.id, req.body);
//     res.json({status: "success" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };
 
exports.deleteEquipEmp = async (req, res) => {
  try {
    const type = await equipEmpService.delete(req.params.id);
    res.json({status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};