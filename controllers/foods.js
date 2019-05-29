const foodModel = require('../models/food');

module.exports = {
    index: index,
    show,
    new: newFood,
    create
    // delete
};


async function index(req, res, next) {
    if (req.query.search) {
        const regex = new RegExp(`.*${req.query.search}.*`);
        const query = { '$regex': regex, '$options': 'i' };
        const foods = await foodModel.find({}).or([{ name: query }, { foodType: query }]).populate('restaurant');
        res.render('foods/index', { title: `Food List - ${req.query.search}`, foods });
    } else {
        const foods = await foodModel.find({}).populate('restaurant');
        res.render('foods/index', { title: 'Food List', foods });
    }
};

function show(req, res) {
    foodModel.findById(req.params.id, function(err, food) {
        if (err) return res.send(err);
        res.render('foods/show', { food });
    })
};
  
function newFood(req, res) {
    res.render('foods/new');
};
  
function create(req, res) {
    const Food = new foodModel({ 
        name: req.body.name, 
        foodType: req.body.foodType, 
    }).save(function(err) {

      if (err) return res.send(err);
      res.redirect('/foods');
    });
}