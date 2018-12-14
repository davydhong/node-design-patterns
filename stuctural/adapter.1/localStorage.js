// ? Provide the same interface that's will be used in the index.js

const {
  writeFile, existsSync, readFileSync, unlink,
} = require('fs');

class LocalStorage {
  constructor() {
    if (existsSync('./localStorage.json')) {
      console.log('Loading Data');
      const txt = readFileSync('./localStorage.json');
      this.items = JSON.parse(txt);
    } else {
      this.items = {};
    }
  }

  get length() {
    return Object.keys(this.items).length;
  }

  getItem(key) {
    return this.items[key];
  }

  setItem(key, value) {
    this.items[key] = value;
    // make the data persist
    writeFile('./localStorage.json', JSON.stringify(this.items), (error) => {
      if (error) console.error(error);
    });
  }

  clear() {
    this.items = {};
    unlink('./localStorage.json', () => {
      console.log('localStorage file removed');
    });
  }
}
module.exports = new LocalStorage();
