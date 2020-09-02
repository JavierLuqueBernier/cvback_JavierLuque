const express = require('express');
const app = express(); /* llamada a la funcion de express */

require('dotenv').config();

app.use('/api', )

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});