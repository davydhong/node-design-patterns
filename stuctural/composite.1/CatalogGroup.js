class CatalogGroup {
  constructor(name, composites) {
    this.name = name;
    this.composites = composites; // * this can be a group or an item
  }

  get total() {
    return this.composites.reduce((total, nextItem) => total + nextItem.total, 0);
  }

  print() {
    console.log(`\n${this.name.toUpperCase()}`);
    this.composites.forEach(item => item.print());
  }
}

module.exports = CatalogGroup;
