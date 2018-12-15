// ! Use: create multiple algorithms and decide upon which algorithm to use at runtime. Allows adding more options without altering the checkout process directly.

/*
Use Case: DECOUPLING payment process from checkout process
Flexible payment methods (card/gift card/pay pal/etc)
*/

// ! Intent: Define a family of algorithms, encapsulate each one,and make them interchageable. Strategy lets the algorithm vary independently from clients that use it

const logger = require('./Logger');

logger.log('Hello World');
logger.log('Hi World');
logger.log('Yo World');

/*
this changes the behavior of logger
* Uses config.json
*/
logger.changeStrategy('toFile');

logger.log('Hello World');
logger.log('Hi World');
logger.log('Yo World');

logger.changeStrategy('none');

logger.log('Hello World');
logger.log('Hi World');
logger.log('Yo World');
