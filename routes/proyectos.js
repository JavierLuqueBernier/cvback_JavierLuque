const router = require('express').Router();
const multer = require('multer');
const upload = multer({ dest: 'public/images'});
const fs = require('fs');

const Proyecto = require('../models/proyecto');

router.get('/', async (req, res) => {
    const proyectos = await Proyecto.find().lean();
    res.render('proyectos/index', { proys: proyectos });
});

router.get('/new', async (req, res) => {
    /* var fullUrl = req.protocol + '://' + req.get('host'); */
    try {
        res.render('proyectos/formulario');
    } catch (err) {
        res.json({ error: err})
    }
});

router.post('/create', upload.single('imagen'), async (req, res) => {
    console.log(req.file);
    const finalPath = req.file.path + '.' + mimeTipeExtension(req.file.mimetype);
    fs.renameSync(req.file.path, finalPath);

    req.body.imagen = finalPath;
    
    try {
        const proyecto = await Proyecto.create(req.body);
        res.redirect('/proyectos');
    } catch (err) {
        res.json({ error: err});
    }
    
});

function mimeTipeExtension(mimeType) {
    return mimeType.split('/')[1];

}

module.exports = router;