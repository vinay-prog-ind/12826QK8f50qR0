const express = require('express');

const salesController = require('../controller/salesController')

const router = express.Router();

router.route('/data-visualization-dash').get(salesController.getSalesData);

module.exports = router;