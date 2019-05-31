const User = require('../models/user');
const Food = require('../models/food');
const Review = require('../models/review');

async function rating(req, res) {
    let review = await Review.findOne({
        user: req.body.user,
        food: req.body.food,
    }).exec();
    if (review) {
        review.rating = Number(req.body.rating);
        await review.save();
        res.redirect(`/foods/${req.body.food}`);
    } else {
        review = await new Review({
            user: req.body.user,
            food: req.body.food,
            rating: Number(req.body.rating),
        }).save();
        res.redirect(`/foods/${req.body.food}`);
    }
}

module.exports = {
    rating
}