const express = require('express');
const app = express(); /* llamada a la funcion de express */

app.get('/', (req, res) => {
    res.send('Hola servidor');
});

app.listen(3000, () => {
    console.log('Servidor escuchando en puerto 3000');
});