const Address = require("./Address");
// class Person {
//   constructor(name, address) {
//     this.name = name;
//     this.address = address;
//   }
// }

const Address = require("./Address");

// module.exports = Person;

//Poderia ser feito dessa forma
class Person {
  constructor(name, street, number, neighborh, address, city) {
    this.name = name;
    this.address = new Address(street, number, neighborh, address, city);
  }
}

module.exports = Person;
