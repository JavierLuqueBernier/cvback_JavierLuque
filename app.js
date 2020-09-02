const express = require('express');
const app = express(); /* llamada a la funcion de express */

require('dotenv').config();

const apiRouter = require('./routes/api');

app.use('/api', apiRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});