import mysql from 'mysql2';

export const bd = mysql.createPool({
    host: process.env.CONEXAO || "localhost",
    user: 'root',
    password: 'senaisp',
    database: 'exemplo',
    waitForConnections: true,
    connectionLimit: 10,
    port: 3306
});