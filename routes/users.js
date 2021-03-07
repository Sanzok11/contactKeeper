const express = require('express');
const router = express.Router();
const { validationResult, check } = require('express-validator');
const bcrypt = require('bcryptjs');


const User = require('../models/User');

//desc:Register User
//access:Public

router.post('/', [
    check('name', 'Please enter valid name').not().isEmpty(),
    check('email', 'Please enter avaialable email').isEmail(),
    check('password', 'Choose stronger password').isLength({ min: 5 })
],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { name, email, password } = req.body;
        try {
            let user = await User.findOne({ email })
            if (user) {
                res.status(400).json({ msg: 'User already exist' })
            }
            user = new User({
                name,
                email,
                password
            })
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);
            await user.save();
            res.send('User saved to db')
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Something wrng');
        }
    }
);

module.exports = router;
