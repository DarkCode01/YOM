const { Router } = require('express');
const controllers = require('../controllers/product.controllers');
const { validateObjectId } = require('../middlewares/validate.middleware');
const { upload, limitFiles } = require('../middlewares/multer.middleware');
const router = Router();


router.get('/products', controllers.getProducts);
router.get('/products/:id', validateObjectId, controllers.getProductByObjectId);
router.post('/products', upload.any(), limitFiles, controllers.createProduct);

// TODO: Hacer que se borren las imagenes almacenas en la cloud: por hace jose segura.
router.delete('/products', validateObjectId, controllers.deleteProductByObjectId);


module.exports = router;