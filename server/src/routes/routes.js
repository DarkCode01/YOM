const { Router } = require('express'),
    router = Router(),
    { usuario, articulo } = require('../models/modelos');
router.get('/', (req,res)=>{
    articulo.find((err,articulos)=>{
        res.json(articulos);
        
    })    
})

router.post('/producto',(req,res)=>{
    let papa = new articulo({
        nomArt:   req.body.nomArt,
        descripcion: req.body.descr,
        precio: req.body.precio, 
        ctg: req.body.ctg, 
    })

    papa.save();

    res.json(papa);
})
router.get('/welcome', (req, res) => {
    res.send("Hello!");
})

module.exports = router;