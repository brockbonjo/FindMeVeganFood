var mongoose = require('mongoose');

// optional shortcut to the mongoose.Schema class
var Schema = mongoose.Schema;

var reviewSchema = new Schema({
    review: {
        type: String,
    },
    rating: {
        type: Number, 
    },
});

var foodSchema = new Schema({
    foodItem: {
        type: String,
    },
    visitDate: {
        type: Date, 
        default: function() {
        return new Date(new Date().setFullYear(new Date().getFullYear() + 1));
        },
    },
    restaurant: {
        type: String,
    },
    reviews: [reviewSchema]
});





module.exports = mongoose.model('Food', foodSchema);