const { Router } = require('express'),
    router = Router();

router.get('/welcome', (req, res) => {
    res.send("Hello!");
})

module.exports = router;