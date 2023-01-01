// let velocity = 80;

// while (velocity > 0) {
//   alert("the car is " + velocity + " km/h");
//   velocity -= 20;
//   alert("decreasing 20 km/h");
// }

// alert("the car stopped.");

let velocity = 80;

while (velocity > 0) {
  alert("the car is " + velocity + " km/h");
  velocity -= 20;
  alert("decreasing 20 km/h");

  if (velocity === 40) {
    break;
  }
}

alert("the car stopped.");
