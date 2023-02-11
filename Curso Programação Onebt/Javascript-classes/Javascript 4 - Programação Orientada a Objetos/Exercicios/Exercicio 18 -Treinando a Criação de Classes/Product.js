class Product {
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.inStock = 0;
  }
  addToStock(quantity) {
    this.inStock += quantity;
  }

  calculateDiscout(discount) {
    return this.price * ((100 - discount) / 100);
  }
}

const watch = new Product("Relógio de Pulso", "....", 80);
watch.addToStock(99);

const priceWithDiscount = watch.calculateDiscout(15);

console.log(watch);
console.log(priceWithDiscount);
