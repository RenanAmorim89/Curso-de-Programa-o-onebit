const vehicle1 = prompt("Enter the Name of the First Vehicle");
const velocity1 = prompt("Enter the Speed ​​of the First Vehicle");

const vehicle2 = prompt("Enter the Name of the Second Vehicle");
const velocity2 = prompt("Enter the Speed ​​of the Second Vehicle");

//Comparation

if (velocity1 > velocity2) {
  alert(vehicle1 + " is faster than " + vehicle2);
} else if (velocity2 > velocity2) {
  alert(vehicle2 + " is faster than " + vehicle1);
} else {
  alert(vehicle1 + " It is " + vehicle2 + " have equal speeds ");
}
