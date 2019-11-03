const { Router } = require('express'),
    path= require('path'),
    router = Router(),
    upload=require('../storage'),
    roi=require('../roi'),
    { usuario, articulo } = require('../models/modelos');
router.get('/', (req,res)=>{
    articulo.find({},(err,articulos)=>{
        res.json(articulos);
        
    })    
})

router.post('/producto/:id',upload.any(),(req,res)=>{
    const { nomArt, descripcion, precio, ctg } = req.body;
    const{id}=req.params;
    var old_images = [], new_images=[], for_update=[], resize=[];
    var update={};
    req.files.forEach((file) => {
        new_images.push(file.path);
        resize.push(path.join(Root,'../',file.path))
    }) 
        roi(resize);
    if(Object.keys(req.body).length === 0){
        res.json('invalid data');
    }else{
        articulo.findOne({_id:id},'images',(err,art)=>{
            old_images=[...art.images]
            new_images.forEach((image,index)=>{
                for_update[index]=image;
            })
            for(let i=for_update.length;i<5;i++){
                for_update[i]=old_images[i];
            }
            console.log(for_update)
            update = {
                    nomArt:     nomArt,
                    descripcion:   descripcion,
                    precio:   precio, 
                    images:for_update,
                    ctg:   ctg, 
                    }
            articulo.findOneAndUpdate({_id:id}, {$set: update}, (err, art)=>{
                   if (err) return res.send(500, { error: err });
                   return res.json(art);
               });
        }) 
                    
    
   
}
})

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


module.exports = router;