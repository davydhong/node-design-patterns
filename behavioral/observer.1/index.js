// ! Observer Intent: Define a one-to-many dependency between objects so that when one object changes state, all its depents are notified and updated automatically

// * Example: traffic signal to cars / bikes / pedestrians

const Store = require('./Store');
const Shopper = require('./Shopper');
const Mall = require('./Mall');

const catsAndThings = new Store('Cats & Things');
const insAndOuts = new Store('Ins and Outs');

const alex = new Shopper('Alex');
const eve = new Shopper('Eve');
const sharon = new Shopper('Sharon');
const mike = new Shopper('Mike');

const valleyMall = new Mall();

catsAndThings.subscribe(alex);
catsAndThings.subscribe(eve);
catsAndThings.subscribe(sharon);
catsAndThings.subscribe(mike);
catsAndThings.subscribe(valleyMall);
insAndOuts.subscribe(sharon);
insAndOuts.subscribe(valleyMall);

// shops going on sale should notify all the subscribers
catsAndThings.sale(20);
insAndOuts.sale(50);

// check which shops @ the mall are on sale
console.log(valleyMall.sales);
