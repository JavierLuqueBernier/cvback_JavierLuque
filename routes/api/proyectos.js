const router = require('express').Router();

const Proyecto = require('../../models/proyecto');

router.get('/', (req, res) => {
    let proyecto = new Proyecto();
    proyecto.titulo = 'Proyecto de prueba';
    proyecto.save().then((p) => {
        console.log(p);
    }).catch(err => {
        console.log(err);
    })
    res.send('estoy donde tengo que estar');
});

router.post('/', async (req, res) => {
    const  nuevoProyecto = await Proyecto.create(req.body)
    res.json(nuevoProyecto);
});

module.exports = router;