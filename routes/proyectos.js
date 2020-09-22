const router = require('express').Router();

const Proyecto = require('../models/proyecto');

router.get('/', async (req, res) => {
    const proyectos = await Proyecto.find();
    res.render('proyectos/index', { proyectos });
});

module.exports = router;