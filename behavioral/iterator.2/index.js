// ! Iterator: Provide a way to access the element of an aggregate object sequentially without exposing its underlying representation
// ! In addition, iterator provides a uniform interface to iterate over ANY COLLECTION

const InventoryItem = require('./InventoryItem');
// Import iterator class
const Iterator = require('./iterator');

require('readline').emitKeypressEvents(process.stdin);

process.stdin.setRawMode(true);

console.log('Press any direction key...');

const inventory = new Iterator([new InventoryItem('Poles', 9.99), new InventoryItem('Skis', 799.99), new InventoryItem('Boots', 799.99), new InventoryItem('Burgers', 5.99), new InventoryItem('Fries', 2.99), new InventoryItem('Shake', 4.99), new InventoryItem('Jeans', 59.99), new InventoryItem('Shoes', 39.99)]);

process.stdin.on('keypress', (str, key) => {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);

  switch (key.name) {
    case 'right':
      // process.stdout.write('right');
      inventory.next().writeLn();
      break;

    case 'left':
      // process.stdout.write('left');
      inventory.prev().writeLn();
      break;

    case 'down':
      // process.stdout.write('down');
      inventory.last().writeLn();
      break;

    case 'up':
      // process.stdout.write('up');
      inventory.first().writeLn();
      break;

    case 'c':
      if (key.ctrl) {
        process.exit();
      }
      break;

    default:
      console.log('do nothing');
      break;
  }
});
