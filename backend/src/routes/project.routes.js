const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth.middleware");
const { createProject } = require("../controllers/project.controller");

// 🔒 PROTECTED ROUTE
router.post("/", auth, createProject);

module.exports = router;

