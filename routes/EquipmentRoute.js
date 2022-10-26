const express = require("express");
const { getAllEquipments, createEquipment } = require("../controllers/EquipmentController");

const router = express.Router();

router.route("/").get(getAllEquipments).post(createEquipment);
// router.route("/:id").get(getTypeById).put(updateType).delete(deleteType);

module.exports = router;
