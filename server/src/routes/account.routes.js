const { Router } = require('express');
const { product } = require('../models');

const router = Router();

router.get('/accounts', (req, res) => {
    res
        .json({
            e: 'ssss'
        });
})

module.exports = router;