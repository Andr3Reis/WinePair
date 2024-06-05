const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database.js");

async function getAllChat() {
  const connection = await mysql.createConnection(databaseConfig);

  const [rows] = await connection.query("SELECT * FROM chat");

  await connection.end();

  return rows;
}

async function createChat(
  idUser,
  mensagemEnviada,
  mensagemRecebida,
  dataInteracao
) {
  const connection = await mysql.createConnection(databaseConfig);

  const insertChat =
    "INSERT INTO user(idUser, mensagemEnviada, mensagemRecebida, dataInteracao) VALUES(?, ?, ?, ?)";

  await connection.query(insertChat, [
    idUser,
    mensagemEnviada,
    mensagemRecebida,
    dataInteracao,
  ]);

  await connection.end();
}

async function updateChat(
  id,
  idUser,
  mensagemEnviada,
  mensagemRecebida,
  dataInteracao
) {
  const connection = await mysql.createConnection(databaseConfig);

  const updateChat =
    "UPDATE chat SET idUser = ?, mensagemEnviada = ?, mensagemRecebida = ?, dataInteracao = ? WHERE id = ?";

  await connection.query(updateChat, [
    idUser,
    mensagemEnviada,
    mensagemRecebida,
    dataInteracao,
    id,
  ]);

  await connection.end();
}

async function deleteChat(id) {
  const connection = await mysql.createConnection(databaseConfig);

  await connection.query("DELETE FROM chat WHERE id = ?", [id]);

  await connection.end();
}

async function getChatById(id) {
  const connection = await mysql.createConnection(databaseConfig);

  const [chat] = await connection.query("SELECT * FROM chat WHERE id = ?", [
    id,
  ]);

  await connection.end();

  return chat;
}

module.exports = {
  getAllChat,
  createChat,
  updateChat,
  deleteChat,
  getChatById,
};
