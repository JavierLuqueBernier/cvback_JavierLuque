const express = require('express');
const app = express(); /* llamada a la funcion de express */



app.listen(3000, () => {
    console.log('Servidor escuchando en puerto 3000');
})