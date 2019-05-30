const mongoose = require('mongoose');

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;


const restaurantSchema = new Schema({
    name: {
        type: String,
    },
    address: {
        type: String,
    },
})

// const restaurants = [
//     {name: 'Plow Burger'},
//     {name: 'Beer Plant'},
//     {name: 'Veggie Heaven'},
//     {name: 'Sundaze'},
//     {name: 'Counter Culture'},
//     {name: 'Citizen Eatery'},
//     {name: 'Next Level Burger'},
//     {name: 'Mr. Natural'},
//     {name: "Arlo's"},
//     {name: 'Bouldin Creek Cafe'},
//     {name: 'Vegan Nom'},
//     {name: 'Cool Beans'},
//     {name: "Li'l Nonna's"},
//     {name: 'Vegan Yacht'},
//     {name: 'Revolution Vegan Kitchen'},    
// ];


module.exports = mongoose.model('Restaurant', restaurantSchema);
