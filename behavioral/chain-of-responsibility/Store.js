// * Change
const Storage = require('./Storage');

// * End of Change

class Store {
  constructor(name, inventory = []) {
    this.name = name;
    // this.inventory = inventory;
    const floor = new Storage('store floor', inventory.floor);
    const backroom = new Storage('store backroom', inventory.backroom);
    const localStore = new Storage('nearby store', inventory.localStore, 1);

    const warehouse = new Storage('warehouse', inventory.warehouse, 5);

    floor.setNext(backroom);
    backroom.setNext(localStore);

    localStore.setNext(warehouse);

    this.storage = floor;
  }

  find(itemName) {
    // instead of looking up from the inventory, look up from Storage object
    //   const index = this.inventory.map(item => item.name).indexOf(itemName);
    // return this.inventory[index];
    return this.storage.find(itemName);
  }
}

module.exports = Store;
