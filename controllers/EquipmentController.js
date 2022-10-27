const equipmentService = require("../services/EquipmentService");

exports.getAllEquipments = async (req, res) => {
  try {
    const equipments = await equipmentService.getAllEquipments();
    res.json({ data: equipments, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createEquipment = async (req, res) => {
  try {
    const equip = await equipmentService.createEquipment(req.body);
    res.json({ data: equip, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getEquipmentById = async (req, res) => {
  try {
    const equip = await equipmentService.getEquipmentById(req.params.id);
    res.json({ data: equip, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};