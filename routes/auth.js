const express = require('express');
const router = express.Router();

//desc:Get logged in user
//access:Private
router.get('/', (req, res) => {
    res.send('Get Logged in user')
})

//desc:Authenticate User and get token
//access:Public
router.post('/', (req, res) => {
    res.send('Log in User')
})

module.exports = router;