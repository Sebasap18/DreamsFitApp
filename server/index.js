const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
const accessRoutes = require('./routes/core/accessRoutes');
app.use('/view',accessRoutes);
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});