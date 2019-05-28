var foodsModel = require('../models/food');

module.exports = {
    index: index,
    show,
    newFood,
    create,
    deleteFood
};

function deleteFood(req, res) {
    foodsModel.remove(req.params.id);
    console.log('test');
    res.redirect('/foods');
};

function create(req, res) {
    foodsModel.create(req.body);
    return res.redirect('/foods');
};

function newFood(req, res) {
    res.render('foods/new');
};

function index(req, res, next) {
    var foods = foodsModel.getAll();
    res.render('foods/index', { title: 'Food List', foods });
};

function show(req, res, next) {
    var foods = foodsModel.getOne(req.params.id);
    res.render('foods/show', { foods });
};