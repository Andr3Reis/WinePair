const compraService = require("../service/compra.js");

async function getAllCompra (req, res) {
    try{ 
        const rows = await chatService.getAllCompra();

        res.status(200).json(rows)
    }catch(error){ 
        res.status(500).send({
            messege:"Error getting compras",
            body: error.messege,
        });
    }
}

async function createCompra (req, res) {
    const { idUser, idLojas, dataCompra, preco, quantidade } = req.body;
  
    try {
      await userService.createUser(idUser, idLojas, dataCompra, preco, quantidade);
  
      res.status(201).json({ message: "Success " });
    } catch (error) {
      res.status(500).send({
        message: "Error adding compra!",
        error: error.message,
      });
    }
  }

  async function updateCompra(req, res) {
    try {
      const { id } = req.params;
      const { idUser, idLojas, dataCompra, preco, quantidade} = req.params;
  
      await compraService.updateCompra(idUser, idLojas, dataCompra, preco, quantidade);
  
      res.status(204).json("Success");
    } catch (error) {
      res.status(500).send({
        message: "Error update compra!",
        error: error.message,
      });
    }
  }

  async function deleteCompra(req, res) {
    try {
      const { id } = req.params;
  
      const compra = await compraService.deleteCompra(id);
  
      res.status(200).json({ message: "Deleted compra!" });
    } catch (error) {
      res.status(500).send({
        message: "Error deleting compra!",
        error: error.message,
      });
    }
  }

  async function getCompraById(req, res) {
    try {
      const { id } = req.params;
  
      const compra = await compraService.getCompraById(id);
  
      res.status(200).json(chat);
    } catch (error) {
      res.status(500).send({
        message: "Error getting compra by ID",
        error: error.message,
      });
    }
  }

  module.exports = {
    getAllCompra,
    createCompra,
    updateCompra,
    deleteCompra,
    getCompraById,
  };