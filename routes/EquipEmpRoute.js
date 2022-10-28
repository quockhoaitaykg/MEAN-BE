const express = require("express");
const { getAll, createEquipEmp, getById, deleteEquipEmp} = require("../controllers/EquipEmpController");

const router = express.Router();

router.route("/").get(getAll).post(createEquipEmp);
router.route("/:id").get(getById).delete(deleteEquipEmp);

module.exports = router;
