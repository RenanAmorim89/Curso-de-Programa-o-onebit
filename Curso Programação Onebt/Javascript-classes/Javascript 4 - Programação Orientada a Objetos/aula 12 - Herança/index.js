class Property {
  constructor(area, price) {
    this.area = area;
    this.price = price;
  }

  getPricePerSquareMeter() {
    return this.price / this.area;
  }
}

// Para usar a "herança" da class mãe vamos usar "extends" com nome da class mãe.
class House extends Property {}

const land = new Property(200, 50000);
const someHouse = new House(120, 20000);

console.log(land);
console.log(someHouse);
console.log(someHouse instanceof Property);

class Apartment extends Property {
  constructor(number, area, price) {
    //Quando estamos usando a Herança precisamos usar a palavra "super" para puxar todos os atributos da class mae
    super(area, price);
    //agora podemos add a propriedade que faltava
    this.number = number;
  }
  //Criando elementos exclusivos dessa class
  getFloor() {
    return this.number.slice(0, -2);
  }
}

const apt = new Apartment("201", 100, 16000);

console.log(apt);
console.log(apt.getFloor());
