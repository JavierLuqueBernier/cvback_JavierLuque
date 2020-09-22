const router = require('express').Router();

const Proyecto = require('../models/proyecto');

router.get('/', async (req, res) => {
    const proyectos = await Proyecto.find().lean();
    res.render('proyectos/index', { proys: proyectos });
});

router.get('/new', async (req, res) => {
    try {
        res.render('proyectos/formulario');
    } catch (err) {
        res.json({ error: err})
    }
});

router.post('/create', async (req, res) => {
    try {
        const proyecto = await Proyecto.create(req.body);
        res.redirect('/proyectos');
    } catch (err) {
        res.json({ error: err});
    }
    
})

module.exports = router;