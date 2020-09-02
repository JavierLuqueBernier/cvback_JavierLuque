const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('estoy donde tengo que estar');
})

module.exports = router;