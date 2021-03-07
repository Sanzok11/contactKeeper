const express = require('express');
const router = express.Router();

//desc:Get your contacts
//access:Private
router.get('/', (req, res) => {
    res.send('Get your contacts')
})

//desc:Add user
//access:Private
router.post('/', (req, res) => {
    res.send(req.body)
})

//desc:Update user
//access:Private
router.put('/:id', (req, res) => {
    res.send('Update contact')
})

//desc:Delete user
//access:Private
router.post('/:id', (req, res) => {
    res.send('Delete contact')
})

module.exports = router;