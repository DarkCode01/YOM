const multer = require('multer');
const mime = require('mime-types');


const storage = multer.diskStorage({
    destination:  (req, file, cb) =>{
      cb(null, 'storage/images')
    },
    filename:  (req, file, cb)=> {
      cb(null, `${file.fieldname}-${Date.now()}.${mime.extension(file.mimetype)}`)
    }
  })
   
  const upload = multer({ storage:storage })

  module.exports= upload;