const mongoose = require('mongoose');


// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;


const foodSchema = new Schema({
    name: String,
    foodType: String,
    restaurant: {
        type: Schema.ObjectId,
        ref: 'Restaurant',
        required: true,
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Food', foodSchema);