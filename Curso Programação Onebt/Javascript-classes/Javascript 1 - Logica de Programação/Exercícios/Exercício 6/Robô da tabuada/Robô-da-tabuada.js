const number = parseFloat(prompt("what number do you want to multiply?"));

let result = "";

for (let factor = 1; factor <= 20; factor++) {
  result += " -> " + number + " * " + factor + " = " + number * factor + "\n";
}

alert("table result " + number + ":\n\n" + result);
