const Food = require('../models/food');
const Restaurant = require('../models/restaurant');

module.exports = {
    index: index,
    show,
    new: newFood,
    create,
    deleteFood,
    editFood,
    update,
};


async function editFood(req, res) {
    if (req.user) {
        const food = await findOne({_id: req.params.id});
        if (food.user === req.user._id) {
            await Food.findOneAndUpdate({ _id: req.params.id }, { 
              name: req.body.name, 
              foodType: req.body.foodType, 
              restaurant: req.body.restaurant,
          }).exec();
            return res.redirect(`/foods/${req.params.id}`);
        }
    }
    res.redirect('/foods');
};

async function update(req, res) {
    const food = await Food.findById(req.params.id);
    const restaurants = await Restaurant.find({});
    res.render('foods/edit', { title: 'Edit Food', food, restaurants, user: req.user });
};

async function index(req, res, next) {
    if (req.query.search) {
        const regex = new RegExp(`.*${req.query.search}.*`);
        const query = { '$regex': regex, '$options': 'i' };
        const foods = await Food.find({}).or([{ name: query }, { foodType: query }]).populate('restaurant');
        res.render('foods/index', { title: `Food List - ${req.query.search}`, foods, user: req.user });
    } else {
        const foods = await Food.find({}).populate('restaurant');
        res.render('foods/index', { title: 'Food List', foods, user: req.user });
    }
};

async function show(req, res) {
    const food = await Food.findById(req.params.id).populate('restaurant');
    const isOwner = req.user && (req.user._id.toString() == food.user.toString());
    res.render('foods/show', { food, user: req.user, isOwner });
};
  
async function newFood(req, res) {
    if (req.user) {
        const restaurants = await Restaurant.find({});
        return res.render('foods/new', { title: 'Add New Food', restaurants, user: req.user });
    } 
    res.redirect('/foods');
};
  
async function create(req, res) {
    if (req.user) {
        const food = await new Food({ 
            name: req.body.name, 
            foodType: req.body.foodType, 
            restaurant: req.body.restaurant,
            user: req.user._id
        }).save();
    }
    res.redirect('/foods');
};

async function deleteFood(req, res) {
    if (req.user) {
        const food = await findOne({_id: req.params.id});
        if (food.user === req.user._id) {
            await Food.findByIdAndDelete(req.params.id).exec();
        }
    }
    res.redirect('/foods');
};