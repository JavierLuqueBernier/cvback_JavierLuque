const jwt = require('jwt-simple');
const moment = require('moment');

exports.checkToken = (req, res, next) => {
    if(!req.headers['access-token']) {
        return res.status(403).json({ error: 'Debes incluir la cabecera access-token'});
    }

    const token = req.headers['access-token'];

    next();
}