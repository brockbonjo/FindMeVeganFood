var express = require('express');
var router = express.Router();
var foodCtrl = require('../controllers/foods');

/* GET foods listing. */
router.get('/', foodCtrl.index);
router.post('/', foodCtrl.create);
router.delete('/:id', foodCtrl.deleteFood);
router.get('/new', foodCtrl.newFood);
router.get('/:id', foodCtrl.show);

module.exports = router;
