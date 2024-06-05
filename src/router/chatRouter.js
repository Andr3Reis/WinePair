const express = require("express");
const router = express.Router();
const chatController = require("../controller/chatController.js");

router.get("/chat", chatController.getAllChat);
router.post("/chat", chatController.createChat);
router.put("/chat/:id", chatController.updateChat);
router.delete("/chat/:id", chatController.deleteChat);
router.get("/chat/:id", chatController.getChatById);

module.exports = router;
