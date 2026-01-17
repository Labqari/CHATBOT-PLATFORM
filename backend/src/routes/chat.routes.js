const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth.middleware");
const { createChat } = require("../controllers/chat.controller");

router.post("/", (req, res, next) => {
  console.log("✅ /api/chats route HIT");
  next();
}, authMiddleware, createChat);

module.exports = router;

