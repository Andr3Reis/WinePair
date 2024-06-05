const chatService = require("../service/chat.js");

async function getAllChat(req, res) {
    try{
        const rows = await chatService.getAllChat();
        
        res.status(200).json(rows);
    }catch (error){
        res.status(500).send({

            message: "Error getting chats",
            body: error.message,
        });
    }
}

async function createChat(req, res) {
    const { idCreate, mensagemEnviada, mensagemRecebida, dataInteracao } = req.body;

    try{
        await userController.createChat(idCreate, mensagemEnviada, mensagemRecebida, dataInteracao);
        
        res.status(200).json({massege: "Sucess"});
    }catch (error){
        res.status(500).send({
            message: "Error getting chats",
            body: error.message,
        });
    }
}

async function updateChat(req, res) {
    try {
      const { id } = req.params;
      const { idCreate, mensagemEnviada, mensagemRecebida, dataInteracao } = req.params;
  
      await chatService.updateChat (idCreate, mensagemEnviada, mensagemRecebida, dataInteracao);
  
      res.status(204).json("Success");
    } catch (error) {
      res.status(500).send({
        message: "Error update user!",
        error: error.message,
      });
    }
  }

  async function deleteChat(req, res) {
    try {
      const { id } = req.params;
  
      const chat = await chatService.deleteChat(id);
  
      res.status(200).json({ message: "Deleted Chat!" });
    } catch (error) {
      res.status(500).send({
        message: "Error deleting chat!",
        error: error.message,
      });
    }
  }

  async function getChatById(req, res) {
    try {
      const { id } = req.params;
  
      const user = await chatService.getChatById(id);
  
      res.status(200).json(chat);
    } catch (error) {
      res.status(500).send({
        message: "Error getting chat by ID",
        error: error.message,
      });
    }
  }
  

  module.exports = {
    getAllChat,
    createChat,
    updateChat,
    deleteChat,
    getChatById,
  };
  