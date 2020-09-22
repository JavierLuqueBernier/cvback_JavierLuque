const express = require('express');
const cors = require('cors');
const exphbs = require('express-handlebars');
const app = express(); /* llamada a la funcion de express */

require('dotenv').config();
require('./db');

const apiRouter = require('./routes/api');
const proyectosRouter = require('./routes/proyectos');

// Template Engine Setup
app.engine('.hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', '.hbs');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));


app.use('/api', apiRouter); /* Aqui estamos diciendo:"si me llega una peticion con api me la mandas a routes/api" */
app.use('/proyectos', proyectosRouter); /* Aqui estamos diciendo:"si me llega una peticion con proyectos me la mandas a routes/proyectos" */

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});