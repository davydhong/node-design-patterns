// ! problem: for each class, you have to import separately and instantiate a new object
// ! solution: factory method
// const Shopper = require('./Shopper');
// const Employee = require('./Employee');
const userFactory = require('./userFactory');

// const alex = new Shopper('Alex Banks', 100);
// const eve = new Employee('Eve Porcello', 100, 'This and That');
const alex = userFactory('Alex Banks', 100);
const eve = userFactory('Eve Porcello', 100, 'employee', 'This and That');

console.log(alex.toString());
console.log(eve.toString());
