// ! use factory function for more general objects
// ! use builder function for more customization
// * Intent: Separate the construction of a complex object from its representation so that the same construction process can create different representations.

// ! problem: too many inputs can cloud what the inputs mean
// const Person = require('./Person');
const PersonBuilder = require('./PersonBuilder');

// Employees
// const sue = new Person('Sue', true, true, 60);
const sue = new PersonBuilder('Sue')
  .makeEmployee()
  .makeManager(60)
  .build();
// const bill = new Person('Bill', true, false, 20);
const bill = new PersonBuilder('bill')
  .makeEmployee()
  .makePartTime()
  .build();

// const phil = new Person('Phil', true, false);

// Shoppers
// const charles = new Person('Charles', false, false, 0, 500, ['jeans', 'sunglasses']);
const charles = new PersonBuilder('Charles')
  .withMoney(500)
  .withList(['jeans', 'sunglasses'])
  .build();

// const tabbitha = new Person('Tabbitha', false, false, 0, 1000);
const tabbitha = new PersonBuilder('Tabbitha').withMoney(1000).build();

console.log({ sue });
console.log({ bill });
console.log({ charles });
console.log({ tabbitha });
