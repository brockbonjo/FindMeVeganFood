const foodModel = require('../models/food');

module.exports = {
    index: index,
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
