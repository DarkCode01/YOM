const router = require('express').Router();

router.get('/welcome', (req, res) => {
    res.send("Hello!");
})

module.exports = router;
