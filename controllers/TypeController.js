const typeService = require("../services/TypeService");

exports.getAllTypes = async (req, res) => {
  try {
    const types = await typeService.getAllTypes();
    res.json({ data: types, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createType = async (req, res) => {
  try {
    const type = await typeService.createType(req.body);
    res.json({ data: type, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
