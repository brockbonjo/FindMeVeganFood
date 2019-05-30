const Food = require('../models/food');
const Restaurant = require('../models/restaurant');

module.exports = {
    index: index,
    show,
    new: newFood,
    create,
    deleteFood,
    editFood,
    update
};


async function editFood(req, res) {
    const food = await Food.findOneAndUpdate({ _id: req.params.id }, { 
      name: req.body.name, 
      foodType: req.body.foodType, 
      restaurant: req.body.restaurant,
  }).exec();
    res.redirect(`foods/${req.params.id}`);
};

async function update(req, res) {
    const food = await Food.findById(req.params.id);
    const restaurants = await Restaurant.find({});
    res.render('foods/edit', { title: 'Edit Food', food, restaurants });
};

async function index(req, res, next) {
    if (req.query.search) {
        const regex = new RegExp(`.*${req.query.search}.*`);
        const query = { '$regex': regex, '$options': 'i' };
        const foods = await Food.find({}).or([{ name: query }, { foodType: query }]).populate('restaurant');
        res.render('foods/index', { title: `Food List - ${req.query.search}`, foods });
    } else {
        const foods = await Food.find({}).populate('restaurant');
        res.render('foods/index', { title: 'Food List', foods });
    }
};

async function show(req, res) {
    const food = await Food.findById(req.params.id).populate('restaurant');
    res.render('foods/show', { food });
};
  
async function newFood(req, res) {
    const restaurants = await Restaurant.find({});
    res.render('foods/new', { title: 'Add New Food', restaurants });
};
  
async function create(req, res) {
    console.log(req.body);
    const food = await new Food({ 
        name: req.body.name, 
        foodType: req.body.foodType, 
        restaurant: req.body.restaurant,
    }).save();
    res.redirect('/foods');
}

function deleteFood(req, res) {
    Food.findByIdAndDelete(req.params.id, function(err, food){
      if (err) return res.redirect('/foods');
        console.log(food);
      res.redirect('/foods');
    });
  };