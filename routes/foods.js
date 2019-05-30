var express = require('express');
var router = express.Router();
var foodCtrl = require('../controllers/foods');

/* GET foods listing. */
router.get('/', foodCtrl.index);
router.get('/new', foodCtrl.new);
router.get('/:id/edit', foodCtrl.update);
router.get('/:id', foodCtrl.show);
router.post('/', foodCtrl.create);
router.post('/:id', foodCtrl.editFood);
router.delete('/:id', foodCtrl.deleteFood);



module.exports = router;
