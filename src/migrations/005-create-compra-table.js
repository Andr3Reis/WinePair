const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database.js");

async function createCompraTable() {
  try {
    const connection = await mysql.createConnection(databaseConfig);

    await connection.query(`USE ${databaseConfig.database}`);

    await connection.query(`CREATE TABLE IF NOT EXISTS compra (
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            id_vinho INT,
            id_usuario INT,
            id_lojas INT,
            dataCompra TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            preco DECIMAL(10,2),
            quantidade INT,
            FOREIGN KEY (id_usuario) REFERENCES user(id)
                ON DELETE CASCADE
                ON UPDATE CASCADE,
            FOREIGN KEY (id_lojas) REFERENCES lojas(id)
                ON DELETE CASCADE
                ON UPDATE CASCADE
        )`);

    await connection.end();

    console.log("Table 'compra' created!");
  } catch (error) {
    console.log(`Error creating table 'compra': ${error}`);
  }
}

createCompraTable();
