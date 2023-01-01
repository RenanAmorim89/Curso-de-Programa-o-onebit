function calculateTriangleArea() {
  const base = parseFloat(prompt("Enter the base of the triangle:"));
  const height = parseFloat(prompt("Enter the height of the triangle:"));
  return (base * height) / 2;
}

function calculateRectangleArea() {
  const base = parseFloat(prompt("Enter the base of the Rectangle:"));
  const height = parseFloat(prompt("Enter the height of the Rectangle:"));
  return base * height;
}

function calculateAreSquare() {
  const side = parseFloat(prompt(" Enter the side of the square:"));
  return side * side;
}
function calculateAreaTrapezoid() {
  const biggerBase = parseFloat(prompt("Insert the larger base"));
  const minorBase = parseFloat(prompt("Insert minor base"));
  const height = parseFloat(prompt("Enter the height of the Trapezoid:"));
  return ((biggerBase + minorBase) * height) / 2;
}

function calculateTheCircle() {
  const radius = parseFloat(prompt("tell the radius of the circle"));
  return 3.14 * radius * radius;
}

function showMenu() {
  return prompt(
    "Geometric Calculator\n" +
      "1. Calculate area of triangle\n " +
      "2. Calculate are of rectangle\n " +
      "3. Calculate are of the square\n" +
      "4. Calculate are of the Trapezoid\n" +
      "5. Calculate Circle Area\n" +
      "6. Exit\n"
  );
}

function execute() {
  let option = "";
  do {
    option = showMenu();
    let result;

    switch (option) {
      case "1":
        result = calculateTriangleArea;
        break;
      case "2":
        result = calculateRectangleArea;
        break;
      case "3":
        result = calculateAreSquare;
        break;
      case "4":
        result = calculateAreaTrapezoid;
        break;
      case "5":
        result = calculateTheCircle;
        break;
      case "6":
        alert("Exit");
        break;
      default:
        alert("invalid option");
    }
    if (result) {
      alert("Result: " + result);
    }
  } while (option !== "6");
}
execute();
