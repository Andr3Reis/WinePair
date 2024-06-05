const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database.js");

async function getAllLojas() {
  const connection = await mysql.createConnection(databaseConfig);

  const [rows] = await connection.query("SELECT * FROM lojas");

  await connection.end();

  return rows;
}

async function createLojas(nomeLoja, localizacao, descricao, avaliacao) {
  const connection = await mysql.createConnection(databaseConfig);

  const insertLojas =
    "INSERT INTO lojas(nomeLoja, localizacao, descricao, avaliacao) VALUES(?, ?, ?, ?)";

  await connection.query(insertLojas, [
    nomeLoja,
    localizacao,
    descricao,
    avaliacao,
  ]);

  await connection.end();
}

async function updateLojas(id, nomeLoja, localizacao, descricao, avaliacao) {
  const connection = await mysql.createConnection(databaseConfig);

  const updateLojas =
    "UPDATE lojas SET nomeLoja = ?, localizacao = ?, descricao = ?, avaliacao = ? WHERE id = ?";

  await connection.query(updateLojas, [
    nomeLoja,
    localizacao,
    descricao,
    avaliacao,
    id,
  ]);

  await connection.end();
}

async function deleteLojas(id) {
  const connection = await mysql.createConnection(databaseConfig);

  await connection.query("DELETE FROM lojas WHERE id = ?", [id]);

  await connection.end();
}

async function getLojasById(id) {
  const connection = await mysql.createConnection(databaseConfig);

  const [lojas] = await connection.query("SELECT * FROM lojas WHERE id = ?", [
    id,
  ]);

  await connection.end();

  return lojas;
}

module.exports = {
  getAllLojas,
  createLojas,
  updateLojas,
  deleteLojas,
  getLojasById,
};
