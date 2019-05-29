const foodModel = require('./models/food');
const restaurantModel = require('./models/restaurant');


async function seedDB() {
    const restaurants = [
        {
            name: 'Plow Burger', 
            address: '4429 Duval St, Austin, TX 78751', 
            food: {
                name: 'The Plow Burger',
                foodType: 'cheeseburger',
            }
        },
        {
            name: 'Beer Plant', 
            address: '3110 Windsor Rd, Austin, TX 78703',
            food: {
                name: 'Nashville Hot and Crispy',
                foodType: 'sandwich',
            }
        },

        {
            name: 'Veggie Heaven', 
            address: '1611 W 5th St, Austin, TX 78703',
            food: {
                name: 'Ramen Rumble',
                foodType: 'ramen',
            }
        },
    ];
    for (let i = 0; i < restaurants.length; i++) {
        const restaurant = restaurants[i];
        const savedRestaurant = await new restaurantModel({
            name: restaurant.name,
            address: restaurant.address,
        }).save();
        const savedFood = await new foodModel({
            ...restaurant.food,
            restaurant: savedRestaurant._id
        }).save();
    }
}

module.exports = seedDB;