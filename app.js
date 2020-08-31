const express = require('express');
const app = express(); /* llamada a la funcion de express */

require('dotenv').config();

app.get('/', (req, res) => {
    res.send('Hola servidor chulo');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});