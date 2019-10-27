const { Router } = require('express'),
    router = Router(),
    { usuario, articulo } = require('../models/modelos');

router.get('/welcome', (req, res) => {
    res.send("Hello!");
})

module.exports = router;