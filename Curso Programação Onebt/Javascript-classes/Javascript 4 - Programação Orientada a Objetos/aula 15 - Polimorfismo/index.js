class Vehicle {
  move() {
    console.log("O veículo esta se movendo.");
  }
}

class Car extends Vehicle {
  move() {
    console.log("O carro esta se movendo.");
  }
}

class Ship extends Vehicle {
  move() {
    console.log("O navio está navegando.");
  }
}

class Aircraft extends Vehicle {
  move(speed) {
    console.log(`A aeronave está voando a ${speed}`);
  }
}

const delorean = new Car();
const blackPerarl = new Ship();
const epoch = new Aircraft();

// delorean.move();
// blackPerarl.move();
// epoch.move(80);

function start(vehicle) {
  console.log("Iniciando um veículo...");
  vehicle.move();
}

start(delorean);
start(blackPerarl);
start(epoch);
