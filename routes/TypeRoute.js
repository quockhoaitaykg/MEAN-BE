const express = require("express");
const { getAllTypes, createType } = require("../controllers/TypeController");

const router = express.Router();

router.route("/").get(getAllTypes).post(createType);
// router.route("/:id").get(getBlogById).put(updateBlog).delete(deleteBlog);

module.exports = router;
