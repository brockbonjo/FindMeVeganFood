var express = require('express');


const restaurants = [
    {name: 'Plow Burger'},
    {name: 'Beer Plant'},
    {name: 'Veggie Heaven'},
    {name: 'Sundaze'},
    {name: 'Counter Culture'},
    {name: 'Citizen Eatery'},
    {name: 'Next Level Burger'},
    {name: 'Mr. Natural'},
    {name: "Arlo's"},
    {name: 'Bouldin Creek Cafe'},
    {name: 'Vegan Nom'},
    {name: 'Cool Beans'},
    {name: "Li'l Nonna's"},
    {name: 'Vegan Yacht'},
    {name: 'Revolution Vegan Kitchen'},    
  ];
    
module.exports = {
  getAll: getAll,
  getOne,
  create,
  remove
};

function remove(id) {
  restaurants.splice(id - 1, 1);
};
  
function getAll() {
  return restaurants;
};

function getOne(id) {
  return restaurants[id - 1];
};

function create(name) {
  restaurants.push(name);
};
