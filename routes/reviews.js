var express = require('express');
var router = express.Router();
var reviewCtrl = require('../controllers/reviews');

router.post('/', reviewCtrl.rating);

module.exports = router;
