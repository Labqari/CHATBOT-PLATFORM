const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth.middleware");
const { createAgent } = require("../controllers/agent.controller");

// CREATE AGENT
router.post("/", auth, createAgent);

module.exports = router;
