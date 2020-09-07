const router = require('express').Router();
const { check, validationResult } = require('express-validator');

const Proyecto = require('../../models/proyecto');

router.get('/', async (req, res) => {
    try {
        const proyectos = await Proyecto.find();
        res.json(proyectos);
    } catch (err) {
        res.json({ 'error': err});
    }
    
});

router.post('/', async (req, res) => {
    try {
        const nuevoProyecto = await Proyecto.create(req.body)
    } catch {
        res.json({ 'error': err});
    }
   
});

module.exports = router;