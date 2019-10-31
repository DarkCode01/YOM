const { Router } = require('express'),
    router = Router(),
    { usuario, articulo } = require('../models/modelos');
router.get('/', (req,res)=>{
    res.json({ 'message': 'Welcome to firstpage, you DH'});
})
router.get('/welcome', (req, res) => {
    res.send("Hello!");
})

module.exports = router;