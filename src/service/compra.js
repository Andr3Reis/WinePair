const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database.js");

async function getAllCompra() {
  const connection = await mysql.createConnection(databaseConfig);

  const [rows] = await connection.query("SELECT * FROM compra");

  await connection.end();

  return rows;
}

async function createCompra(idUser, idLojas, dataCompra, preco, quantidade) {
  const connection = await mysql.createConnection(databaseConfig);

  const insertCompra =
    "INSERT INTO compra(idUser, idLojas, dataCompra, preco, quantidade) VALUES(?, ?, ?, ?, ?)";

  await connection.query(insertCompra, [
    idUser,
    idLojas,
    dataCompra,
    preco,
    quantidade,
  ]);

  await connection.end();
}

async function updateCompra(
  id,
  idUser,
  idLojas,
  dataCompra,
  preco,
  quantidade
) {
  const connection = await mysql.createConnection(databaseConfig);

  const updateCompra =
    "UPDATE compra SET idUser = ?, idLojas = ?, dataCompra = ?, preco = ?, quantidade = ? WHERE id = ?";

  await connection.query(updateCompra, [
    idUser,
    idLojas,
    dataCompra,
    preco,
    quantidade,
    id,
  ]);

  await connection.end();
}

async function deleteCompra(id) {
  const connection = await mysql.createConnection(databaseConfig);

  await connection.query("DELETE FROM compra WHERE id = ?", [id]);

  await connection.end();
}

async function getCompraById(id) {
  const connection = await mysql.createConnection(databaseConfig);

  const [compra] = await connection.query("SELECT * FROM compra WHERE id = ?", [
    id,
  ]);

  await connection.end();

  return compra;
}

module.exports = {
  getAllCompra,
  createCompra,
  updateCompra,
  deleteCompra,
  getCompraById,
};
