const mongoose = require('mongoose');

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    review: {
        type: String,
    },
    rating: {
        type: Number, 
    },    
    visitDate: {
        type: Date, 
        default: function() {
        return new Date(new Date().setFullYear(new Date().getFullYear() + 1));
        },
    },
    food: {
        type: Schema.ObjectId,
        ref: 'Food',
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User',
    }
});

module.exports = mongoose.model('Review', reviewSchema);