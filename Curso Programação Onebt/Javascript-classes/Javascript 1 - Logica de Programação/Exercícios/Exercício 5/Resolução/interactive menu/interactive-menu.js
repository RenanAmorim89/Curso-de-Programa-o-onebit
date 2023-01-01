let option = "";

do {
  option = prompt(
    "welcome\n" +
      "\nchoose one of the options below" +
      "\n1 - option one" +
      "\n2 - option two" +
      "\n3 - option three" +
      "\n4 - option four" +
      "\n5 - close"
  );

  switch (option) {
    case "1":
      alert("you chose the option 1");
      break;
    case "2":
      alert("you chose the option 2");
      break;
    case "3":
      alert("you chose the option 3");
      break;
    case "4":
      alert("you chose the option 4");
      break;
    case "5":
      alert("Closing the program");
      break;
    default:
      alert("Invalid Input! Choose one of five options.");
  }
} while (option !== "5");
