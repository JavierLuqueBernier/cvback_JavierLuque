const router = require('express').Router();

router.get('/proyectos', (req, res) => {
    res.send('Hola, estás dentro del API');
})

module.exports = router;