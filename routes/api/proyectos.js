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

router.post('/', (req, res) => {
    console.log(req.body);
    res.send('Estoy dentro del post');
});

module.exports = router;