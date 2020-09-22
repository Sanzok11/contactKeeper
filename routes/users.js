const express = require('express');
const router = express.Router();

//desc:Register User
//access:Public
router.post('/', (req, res) => {
    res.send('Register user')
})

module.exports = router;