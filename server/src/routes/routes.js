const { Router } = require('express'),
    path= require('path'),
    router = Router(),
    upload=require('../storage'),
    roi=require('../roi'),
    {  articulo } = require('../models/modelos'),
    shell=require('shelljs');

    //Vista general
router.get('/', (req,res)=>{
    articulo.find({},(err,articulos)=>{
        res.json(articulos);
        
    })    
})

//Modificar producto
router.post('/producto/:id',upload.any(),(req,res)=>{
    const { nomArt, descripcion, precio, ctg } = req.body;
    const{id}=req.params;
    var new_images=[], resize=[];
    var update={};
    req.files.forEach((file) => {
        new_images.push(file.path);
        resize.push(path.join(Root,'../',file.path))
    }) 
        roi(resize);
    if(Object.keys(req.body).length === 0){
        res.json('invalid data');
    }else{
        articulo.findOne({_id:id},'images',(err,articulos)=>{
            articulos.images.forEach((image)=>{
                    let src = path.join(path.join(Root,'../',image));
                    shell.rm('-rf', src);
            })
        })
            update = {
                    nomArt:     nomArt,
                    descripcion:   descripcion,
                    precio:   precio, 
                    images:new_images,
                    ctg:   ctg, 
                    }
            articulo.findOneAndUpdate({_id:id}, {$set: update}, (err, art)=>{
                   if (err) return res.send(500, { error: err });
                   return res.json(art);
            });
        }
                    
    

})
//Crear producto
router.post('/producto',upload.any(),(req,res)=>{
    const { nomArt, descripcion, precio, ctg } = req.body;
    console.log(req.body)
    let new_image = [];
    let resize=[];
    req.files.forEach((file) => {
        new_image.push(file.path);
        resize.push(path.join(Root,'../',file.path))
        console.log(file.path);
    }) 
        roi(resize);
    if(Object.keys(req.body).length === 0){
        res.json('invalid data');
    }else{
    let art = new articulo({
        nomArt:     nomArt,
        descripcion:   descripcion,
        images: new_image,
        precio:   precio, 
        ctg:   ctg, 
    })

    art.save();

    res.json(art).status(200);
}})

//Vista individual
router.get('/producto/:id',(req,res)=>{
    const {id}=req.params
    articulo.find({_id:id},(err,articulos)=>{
        res.json(articulos);
        
    })
})

//eliminar producto
router.delete('/producto/:id',(req,res)=>{
    
     const { id } = req.params;
     articulo.findOne({_id:id},'images',(err,articulos)=>{
        articulos.images.forEach((image)=>{
                let src = path.join(path.join(Root,'../',image));
                shell.rm('-rf', src);
        })
    })
        articulo.deleteOne({_id:id},(err,resu)=>{
            if (err) throw err;
            res.json(resu);
        })
 });  
module.exports = router;