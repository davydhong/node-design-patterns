// ! Intent: Attach additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.

const Shopper = require('./Shopper');
const { InventoryItem, GoldenInventoryItem, DiamondInventoryItem } = require('./InventoryItem');

const alex = new Shopper('Alex', 5000);

const walkman = new InventoryItem('Walkman', 29.99);
const necklace = new InventoryItem('Necklace', 9.99);

// ! Decorator Classes
const gold_necklace = new GoldenInventoryItem(necklace);
const diamond_gold_necklace = new DiamondInventoryItem(gold_necklace);
const diamond_walkman = new DiamondInventoryItem(walkman);

alex.purchase(diamond_gold_necklace);
alex.purchase(diamond_walkman);

alex.printStatus();
