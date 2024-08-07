const userService = require("../service/user.js");

async function getAllUser(req, res) {
  try {
    const rows = await userService.getAllUser();

    res.status(200).json(rows);
  } catch (error) {
    res.status(500).send({
      message: "Error getting users",
      body: error.message,
    });
  }
}

async function createUser(req, res) {
  const { usuario, email, senha } = req.body;

  try {
    await userService.createUser(usuario, email, senha);

    res.status(201).json({ message: "Success " });
  } catch (error) {
    res.status(500).send({
      message: "Error adding user!",
      error: error.message,
    });
  }
}

async function updateUser(req, res) {
  try {
    const { id } = req.params;
    const { usuario, email, senha } = req.body;

    await userService.updateUser(id, usuario, email, senha);

    res.status(204).json("Success");
  } catch (error) {
    res.status(500).send({
      message: "Error update user!",
      error: error.message,
    });
  }
}

async function deleteUser(req, res) {
  try {
    const { id } = req.params;

    const user = await userService.deleteUser(id);

    res.status(200).json({ message: "Deleted User!" });
  } catch (error) {
    res.status(500).send({
      message: "Error deleting user!",
      error: error.message,
    });
  }
}

async function getUserById(req, res) {
  try {
    const { id } = req.params;

    const user = await userService.getUserById(id);

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send({
      message: "Error getting user by ID",
      error: error.message,
    });
  }
}

module.exports = {
  getAllUser,
  createUser,
  updateUser,
  deleteUser,
  getUserById,
};
