const express = require("express");
const { getAllEquipments, createEquipment, getEquipmentById, updateEquipment, deleteEquipment } = require("../controllers/EquipmentController");

const router = express.Router();

router.route("/").get(getAllEquipments).post(createEquipment);
router.route("/:id").get(getEquipmentById).put(updateEquipment).delete(deleteEquipment);

module.exports = router;
