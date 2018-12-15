// ! Intent: Avoid coupling the sender of a request to its receiver by giving more than one object a change to handle the request. Chain the receiving objects and pass the request along the chain.


// Exercise goal: look for the item in the store, and respectively look for the item in the store backroom, local store, then warehouse.

const Store = require('./Store');
const inventory = require('./inventory');

// const skiShop = new Store('Steep and Deep', inventory.floor);

// * send the entire inventory, not just inventory.floor
const skiShop = new Store('Steep and Deep', inventory);

const searchItem = 'wax';
const results = skiShop.find(searchItem);

console.log(results);
