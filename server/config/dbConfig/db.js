const {Pool} = require('pg');
const dotenv = require('dotenv');

// Cargar variables de entorno desde el archivo .env
dotenv.config();
console.log('DB_USER:', process.env.DB_USER);
// Crear un pool de conexiones
const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// Exportar el pool de conexiones para usarlo en otros archivos
module.exports = pool;