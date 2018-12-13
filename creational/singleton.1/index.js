// ! Singleton: allowing only a single instance of an object/class can be instantiated
// ? WHY? Having multiple instances of a single object can lead to unexpected behaviors

const Logger = require('./Logger');
const Shopper = require('./Shopper');
const Store = require('./Store');

// const logger = new Logger();
const logger = new Logger().getInstance();

logger.log('starting app...');

const alex = new Shopper('alex', 500);
const ski_shop = new Store('Steep and Deep Supplies', [
  {
    item: 'Downhill Skis',
    qty: 5,
    price: 750,
  },
  {
    item: 'Knit Hat',
    qty: 20,
    price: 5,
  },
]);

logger.log('finished config...');

console.log(`${logger.count} logs total`);
/*
! Problem of multiple instances: this counts to 2 only counting logger calls in THIS FILE
! Having one instance allows to properly count to 4 even when the logger is being called from difference files
*/

logger.logs.map(log => console.log(`   ${log.message}`));
