module.exports = class Order {
  #total;
  #items;
  #user;

  constructor(items, user) {
    //desestruturando o arrey
    items.forEach(({ product, quantity }) => {
      if (quantity > product.inStock) {
        throw new Error("Quantidade insuficiente em estoque!");
      }
    });
    this.#items = items;
    this.#user = user;
    //calculando a quantidade de produtos pelo seu preço
    this.#total = this.author = items.reduce(
      (sum, { product, quantity }) => sum + product.price * quantity,
      0
    );
  }

  get data() {
    return {
      items: this.#items,
      user: this.#user,
      total: this.#total,
    };
  }
};
