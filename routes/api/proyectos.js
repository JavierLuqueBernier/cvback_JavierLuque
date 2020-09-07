const router = require('express').Router();

const Proyecto = require('../../models/proyecto');

router.get('/', async (req, res) => {
    const proyectos = await Proyecto.find();
    res.json(proyectos);
});

router.post('/', async (req, res) => {
    try {
        const nuevoProyecto = await Proyecto.create(req.body)
    } catch {
        res.json({ 'error': err});
    }
   
});

module.exports = router;