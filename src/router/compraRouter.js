const express = require("express");
const router = express.Router();
const compraController = require("../controller/compraController.js");

router.get("/compra", compraController.getAllCompra);
router.post("/compra", compraController.createCompra);
router.put("/compra/:id", compraController.updateCompra);
router.delete("/compra/:id", compraController.deleteCompra);
router.get("/compra/:id", compraController.getCompraById);

module.exports = router;
