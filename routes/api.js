const router = require('express').Router();
const moment = require('moment');
const jwt = require('jwt-simple');

const apiRouterProyectos = require ('./api/proyectos');

router.use('/proyectos', apiRouterProyectos);

router.get('/token', (req, res) => {
    let payload = {
        usuario: 'Javier',
        createAt: moment().unix(),
        expiredAt: moment().add(5, 'minutes').unix()
    };
    const token = jwt.encode(payload, process.env.SECRET_KEY);
    console.log(token);
    res.json({ token });
});

module.exports = router;