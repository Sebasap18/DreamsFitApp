const express = require('express');
const pool = require('./config/dbConfig/db.js');

const app = express();
const port = 3000;
app.use(express.json());

app.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()');
        res.send(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al conectar con la base de datos');
    }
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
// Ruta para ejecutar una consulta específica
app.get('/unity', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM core.unity');  // Asume que tienes una tabla 'users'
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al ejecutar la consulta');
    }
});