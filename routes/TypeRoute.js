const express = require("express");
const { getAllTypes, createType, getTypeById, updateType, deleteType } = require("../controllers/TypeController");

const router = express.Router();

router.route("/").get(getAllTypes).post(createType);
router.route("/:id").get(getTypeById).put(updateType).delete(deleteType);

module.exports = router;
