const express = require('express');
const bodyParser = require('body-parser');
const app = express(); /* llamada a la funcion de express */

require('dotenv').config();
require('./db');

const apiRouter = require('./routes/api');

/* app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); */

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use('/api', apiRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});