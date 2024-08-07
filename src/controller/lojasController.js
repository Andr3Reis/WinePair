const lojasService = require("../service/lojas.js");

async function getAllLojas(req, res) {
    try {
        const rows = await lojasService.getAllLojas();
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).send({
            message: "Error getting lojas",
            body: error.message,
        });
    }
}

async function createLojas(req, res) {
    const { nomeLoja, localizacao, descricao, avaliacao } = req.body;

    try {
        await lojasService.createLojas(nomeLoja, localizacao, descricao, avaliacao);
        res.status(200).json({ message: "Success" });
    } catch (error) {
        res.status(500).send({
            message: "Error creating lojas",
            body: error.message,
        });
    }
}

async function updateLojas(req, res) {
    try {
        const { id } = req.params;
        const { nomeLoja, localizacao, descricao, avaliacao } = req.body;

        await lojasService.updateLojas(id, nomeLoja, localizacao, descricao, avaliacao);
        res.status(204).json("Success");
    } catch (error) {
        res.status(500).send({
            message: "Error updating lojas",
            error: error.message,
        });
    }
}

async function deleteLojas(req, res) {
    try {
        const { id } = req.params;
        await lojasService.deleteLojas(id);
        res.status(200).json({ message: "Deleted lojas!" });
    } catch (error) {
        res.status(500).send({
            message: "Error deleting lojas!",
            error: error.message,
        });
    }
}

async function getLojasById(req, res) {
    try {
        const { id } = req.params;
        const lojas = await lojasService.getLojasById(id);
        res.status(200).json(lojas);
    } catch (error) {
        res.status(500).send({
            message: "Error getting lojas by ID",
            error: error.message,
        });
    }
}

module.exports = {
    getAllLojas,
    createLojas,
    updateLojas,
    deleteLojas,
    getLojasById,
};
