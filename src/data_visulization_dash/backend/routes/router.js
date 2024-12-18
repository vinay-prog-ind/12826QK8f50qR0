const express = require('express');

const salesController = require('../controller/salesController')
const authControlled = require("../controller/authControlled");

const router = express.Router();

router.post('/signup', authControlled.signup);
router.post('/login', authControlled.login);
router.get('/getUsers', authControlled.getAllUser);

router.route('/dashboard').get(authControlled.protect, salesController.getSalesData);

module.exports = router;    