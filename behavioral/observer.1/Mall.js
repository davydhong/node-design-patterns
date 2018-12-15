class Mall {
  constructor() {
    this.sales = [];
  }

  notify(storeName, discount) {
    this.sales.push({ storeName, discount });
    // console.log(`${this.name}, there is a sale at ${storeName}! ${discount}% off everything`);
  }
}

module.exports = Mall;
