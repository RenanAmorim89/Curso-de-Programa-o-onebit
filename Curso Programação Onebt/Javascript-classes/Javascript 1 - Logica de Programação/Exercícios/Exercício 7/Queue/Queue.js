let row = [];
let option = "";

do {
  let patient = "";
  for (let i = 0; i < row.length; i++) {
    patient += i + 1 + "° - " + row[i] + "\n";
  }

  option = prompt(
    "Patient: \n" +
      patient +
      "\nChoose an Option: \n1. - New Patient \n2. - Consult Patient\n3. - Exit "
  );

  switch (option) {
    case "1":
      const NewPatient = prompt("What is the patient's name?");
      row.push(NewPatient);
      break;
    case "2":
      const PatientConsulted = row.shift();
      if (!PatientConsulted) {
        alert("There are no patients in the queue!");
      } else {
        alert(PatientConsulted + "has been removed from the queue. ");
      }
      break;
    case "3":
      alert("Shutting down");
      break;
    default:
      alert("Invalid option!");
      break;
  }
} while (option !== "3");
