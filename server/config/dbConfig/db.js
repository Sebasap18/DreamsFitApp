const {Sequelize} = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

const sequelize = new Sequelize({
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    define: {freezeTableName: true}
});

/**
 * Verificar la conexión a la base de datos
 * @returns {Promise<void>}
 */
async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Conexión establecida correctamente con la base de datos.');
    } catch (error) {
        console.error('No se pudo conectar a la base de datos:', error);
    }
}

testConnection();

module.exports = sequelize;