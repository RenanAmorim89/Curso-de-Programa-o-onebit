const deck = [];
let option = "";

do {
  option = prompt(
    "Cards in the Deck: " +
      deck.length +
      "\n1. Add a letter\n2. Draw a card\n3. Exit"
  );

  switch (option) {
    case "1":
      const newLetter = prompt("What's the letter?");
      deck.push(newLetter);
      break;
    case "2":
      const drawnLetter = deck.pop();
      if (!drawnLetter) {
        alert("There are no cards in the deck!");
      } else {
        alert("you pulled a letter" + drawnLetter);
      }
      break;
    case "3":
      alert("Exit..");
    default:
      alert("Invalid option!");
  }
} while (option !== "3");
