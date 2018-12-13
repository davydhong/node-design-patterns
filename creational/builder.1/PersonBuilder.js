const Person = require('./Person');

class PersonBuilder {
  constructor(name) {
    this.name = name;
  }

  makeEmployee() {
    this.isEmployee = true;
    return this; // ? this allows for chaining function calls
  }

  makeManager(hours = 40) {
    this.isManager = true;
    this.hours = hours;
    return this;
  }

  makePartTime(hours = 20) {
    this.hours = hours;
    return this;
  }

  withMoney(money) {
    this.money = money;
    return this;
  }

  withList(list) {
    this.list = list;
    return this;
  }

  build() {
    return new Person(this);
  }
}
module.exports = PersonBuilder;
