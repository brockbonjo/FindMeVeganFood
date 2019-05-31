const foodModel = require('./models/food');
const restaurantModel = require('./models/restaurant');


async function seedDB() {
    const restaurants = [
        {
            name: 'Sundaze', 
            address: '701 E 53rd St, Austin, TX 78751', 

        },
        {
            name: 'Counter Culture', 
            address: '2337 E Cesar Chavez St, Austin, TX 78702',

        },

        {
            name: 'Citizen Eatery', 
            address: '5011 Burnet Rd, Austin, TX 78756',

        },

        {
            name: 'Next Level Burger', 
            address: '525 N Lamar Blvd, Austin, TX 78703',

        },

        {
            name: 'Mr. Natural', 
            address: '1901 E Cesar Chavez St, Austin, TX 78702',

        },

        {
            name: "Arlo's", 
            address: '900 Red River, Austin, TX 78702',

        },

        {
            name: 'Bouldin Creek Cafe', 
            address: '1900 S 1st St, Austin, TX 78704',

        },

        {
            name: 'Vegan Nom', 
            address: '2324 E Cesar Chavez St, Austin, TX 78702',

        },

        {
            name: 'Cool Beans', 
            address: '2908 Fruth St, Austin, TX 78705',

        },

        {
            name: 'Vegan Yacht', 
            address: '5212 Manchaca Rd, Austin, TX 78745',

        },

        {
            name: 'Revolution Vegan Kitchen', 
            address: '7800 S 1st St, Austin, TX 78745',

        },

        {
            name: "Li'l Nonna's", 
            address: '1505 Town Creek Dr, Austin, TX 78741',

        },
    ];
    for (let i = 0; i < restaurants.length; i++) {
        const restaurant = restaurants[i];
        const savedRestaurant = await new restaurantModel({
            name: restaurant.name,
            address: restaurant.address,
        }).save();
    }
}

module.exports = seedDB;