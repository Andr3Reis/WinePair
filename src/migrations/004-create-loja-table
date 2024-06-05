const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database.js");

async function createLojaTable() {
  try {
    const connection = await mysql.createConnection(databaseConfig);

    await connection.query(`USE ${databaseConfig.database}`);

    await connection.query(`CREATE TABLE IF NOT EXISTS lojas (
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            nomeLoja VARCHAR(255),
            localizacao VARCHAR(255),
            descricao TEXT,
            avaliacao INT            
        )`);

    await connection.end();

    console.log("Table 'lojas' created!");
  } catch (error) {
    console.log(`Error creating table 'lojas': ${error}`);
  }
}

createLojaTable();
