const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let proyectoSchema = new Schema({
    titulo: String
});

module.export = mongoose.model('Proyecto', proyectoSchema);