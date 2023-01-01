const properties = [];
let option = "";

do {
  option = prompt(
    " Welcome to the Real Estate Register!\n" +
      "Total Properties: " +
      properties.length +
      "\n\n1. Save a Property\n2. Show all properties \n3.Exit"
  );

  switch (option) {
    case "1":
      const immobile = {};

      immobile.owner = prompt("Enter the name of the property owner: ");
      immobile.bedrooms = parseFloat(
        prompt("How many bedrooms does the property have?")
      );
      immobile.bathrooms = parseFloat(
        prompt("How many bathrooms does the property have?")
      );
      immobile.garage = prompt("Does the property have a garage? (Yes/No)");

      const confirma = confirm(
        "Save this property?\n" +
          "\nwner: " +
          immobile.owner +
          "\nRooms: " +
          immobile.bedrooms +
          "\nToilets: " +
          immobile.bathrooms +
          "\nDo you have a garage?" +
          immobile.garage
      );

      if (confirma) {
        properties.push(immobile);
        alert("Property successfully saved!");
      } else {
        alert("Returning to the menu");
      }

      break;
    case "2":
      for (let i = 0; i < properties.length; i++) {
        alert(
          "Immobile " +
            (i + 1) +
            "\nOwner: " +
            properties[i].owner +
            "\nRooms: " +
            properties[i].bedrooms +
            "\nToilets: " +
            properties[i].bathrooms +
            "\nDo you have a garage?" +
            properties[i].garage
        );
      }
      break;
    case "3":
      alert("Exit..");
    default:
      alert("invalid option");
      break;
  }
} while (option !== "3");
