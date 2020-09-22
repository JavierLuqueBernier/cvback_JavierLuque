const express = require('express');
const cors = require('cors');
const exphbs = require('express-handlebars');
const app = express(); /* llamada a la funcion de express */

require('dotenv').config();
require('./db');

const apiRouter = require('./routes/api'); 

// Template Engine Setup
app.engine('.hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', '.hbs');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/test', (req, res) => {
    res.render('prueba');
})
app.use('/api', apiRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});