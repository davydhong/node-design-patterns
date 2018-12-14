// ! Intent: Compose objects into tree structures to represent part-whole hierarchies. Composite lets clients treat individual objects and compositions of objects uniformly.

const CatalogItem = require('./CatalogItem');
const CatalogGroup = require('./CatalogGroup');

const boots = new CatalogItem('Leather Boots', 79.99);
const sneakers = new CatalogItem('Kicks', 39.99);
const flipFlops = new CatalogItem('California work boots', 19.99);

const group_shoes = new CatalogGroup('Shoes and Such', [boots, sneakers, flipFlops]);

const group_food = new CatalogGroup('Food for while you try on clothes', [new CatalogItem('Milkshake', 5.99), new CatalogItem('Fries', 3.99)]);

const keychain = new CatalogItem('Key Chain', 0.99);

// console.log('boots total: ', `$${boots.total}`);
// console.log('shoes total: ', `$${group_shoes.total}`);

// boots.print();
// sneakers.print();
// flipFlops.print();
// group_shoes.print(); // *

const catalog = new CatalogGroup('Clothes and Food', [group_shoes, group_food, keychain]);

console.log('Catalog Total', `$${catalog.total}`);
catalog.print();
