const touristName = prompt("what is your name?");
let cities = "";
let score = 0;

let visitedCity = prompt("Have you ever visited any cities? (yes/no)");

if (visitedCity === "no") {
  alert("OK thank you");
}

while (visitedCity === "yes") {
  let city = prompt("What's the name of the city?");
  // cities = cities + ...
  cities += " - " + city + "\n";
  score++;
  visitedCity = prompt("did you visit another city? (yes/no)");
}

alert(
  "Tourist: " +
    touristName +
    "\nNumber of cities visited: " +
    score +
    "\nCities Visited:\n" +
    cities
);
