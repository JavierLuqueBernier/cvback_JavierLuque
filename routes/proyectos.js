const router = require('express').Router();

const Proyecto = require('../models/proyecto');

router.get('/', async (req, res) => {
    const proyectos = await Proyecto.find().lean();
    res.render('proyectos/index', { proys: proyectos });
});

module.exports = router;