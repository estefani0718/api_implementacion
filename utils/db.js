import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
    host: "localhost",
    user: "estefani_2894667",
    password: "Aprendiz2024",
    database: "node_adso2894667"
})

export default connection;