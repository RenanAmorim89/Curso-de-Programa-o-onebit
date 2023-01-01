const attacker = prompt("What is the name of the attacking character");
const attackPower = prompt("What is you attack power");

const defender = prompt("What is the name of the defending character");
let healthPoints = prompt("How many life points does he have?");
const defenderPower = prompt("What is you attack power?");
const hasAShield = prompt("Does he have a shield? (Yes/No)");

let damageCaused = 0;

if (attackPower > defenderPower && hasAShield === "No") {
  damageCaused = attackPower - defenderPower;
} else if (attackPower > defenderPower && hasAShield === "Yes") {
  damageCaused = (attackPower - defenderPower) / 2;
}

healthPoints -= damageCaused;

alert(attacker + " Caused " + damageCaused + " Hit points in " + defender);
alert(
  attacker +
    "\nAtack Power: " +
    attackPower +
    "\n\n" +
    defender +
    "\nHealyh Points: " +
    defenderPower +
    "\nHas a Shild: " +
    hasAShield
);
