const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database.js");

async function createChatTable() {
  try {
    const connection = await mysql.createConnection(databaseConfig);

    await connection.query(`USE ${databaseConfig.database}`);

    await connection.query(`CREATE TABLE IF NOT EXISTS chatInteracao (
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            id_usuario INT,
            mensagemEnviada TEXT,
            dataInteracao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (id_usuario) REFERENCES user(id)
                ON DELETE CASCADE
                ON UPDATE CASCADE
            )`);

    await connection.end();

    console.log("Table 'chatInteracao' created!");
  } catch (error) {
    console.log(`Error creating table 'chatInteracao': ${error}`);
  }
}

createChatTable();
