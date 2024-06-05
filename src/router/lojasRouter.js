const express = require("express");
const router = express.Router();
const lojasController = require("../controller/lojasController.js");

router.get("/lojas", lojasController.getAllLojas);
router.post("/lojas", lojasController.createLojas);
router.put("/lojas/:id", lojasController.updateLojas);
router.delete("/lojas/:id", lojasController.deleteLojas);
router.get("/lojas/:id", lojasController.getLojasById);

module.exports = router;
