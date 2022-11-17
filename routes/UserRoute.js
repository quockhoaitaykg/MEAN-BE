const express = require("express");
const { getAllUsers, login, createUser} = require("../controllers/UserController");

const router = express.Router();

router.route("/").get(getAllUsers).post(createUser);
router.route("/login").post(login);

module.exports = router;
