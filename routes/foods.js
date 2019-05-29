var express = require('express');
var router = express.Router();
var foodCtrl = require('../controllers/foods');

/* GET foods listing. */
router.get('/', foodCtrl.index);
router.get('/:id', foodCtrl.show);
router.get('/new', foodCtrl.new);
// router.post('/', foodCtrl.create);

module.exports = router;