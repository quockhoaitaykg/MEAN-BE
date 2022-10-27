const express = require("express");
const { getAllEquipments, createEquipment, getEquipmentById } = require("../controllers/EquipmentController");

const router = express.Router();

router.route("/").get(getAllEquipments).post(createEquipment);
router.route("/:id").get(getEquipmentById);

module.exports = router;
