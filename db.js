const mongoose = require('mongoose');

const urlMongo = 'mongodb+srv://javier_luque:tarragona@cluster0.pr5sz.mongodb.net/test';

const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
mongoose.connect(urlMongo, config);