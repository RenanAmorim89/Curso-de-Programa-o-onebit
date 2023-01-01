const vagas = []; // arrey -- as vagas serao salvas  nesse arrey

function listarVagas() {
  const vagasEmTexto = vagas.reduce(function (finalText, vaga, index) {
    finalText += index + ". ";
    finalText += vaga.name;
    finalText += " (" + vaga.candidates.length + " candidates)\n";
    return finalText;
  }, "");
  alert(vagasEmTexto);
}

function novaVaga() {
  const name = prompt("Enter a name for the vacancy:");
  const description = prompt("Provide a description for the job:");
  const deadline = prompt("Enter a deadline for the vacancy (dd/mm/aaaa)");

  const confirmation = confirm(
    "Do you want to create a new job with this information?\n" +
      "Name: " +
      name +
      "\nDescription: " +
      description +
      "\nDeadline: " +
      deadline
  );

  if (confirmation) {
    const novaVaga = { name, description, deadline, candidates: [] };
    vagas.push(novaVaga);
    alert("Vacancy Created.");
  }
}

function exibirVaga() {
  const index = prompt("Enter the vacancy index you want to display:");

  if (index >= vagas.length || index < 0) {
    alert("invalid index");
    return;
  }
  const vaga = vagas[index];

  const candidatosEmTexto = vaga.candidates.reduce(function (
    finalText,
    candidate
  ) {
    return finalText + "\n - " + candidate;
  },
  "");

  alert(
    "Vaga n° " +
      index +
      "\n Nome: " +
      vaga.name +
      "\n Descrição: " +
      vaga.description +
      "\n Data Limite: " +
      vaga.deadline +
      "\n Quantidade de Candidatos: " +
      vaga.candidates.length +
      "\nCandidatos Inscritos: " +
      candidatosEmTexto
  );
}

function inscreverCandidato() {
  const candidate = prompt("Enter the candidate's name:");
  const index = prompt(
    "Inform the index of the vacancy for which the candidate wants to apply:"
  );
  const vaga = vagas[index];

  const confirmation = confirm(
    "Do you want to enroll the candidate " +
      candidate +
      " in the vacancy" +
      index +
      "?\n" +
      "Name: " +
      vaga.name +
      "\nDescription: " +
      vaga.description +
      "\nDeadline" +
      vaga.deadline
  );
  if (confirmation) {
    vaga.candidates.push(candidate);
    alert("Enrollment done");
  }
}

function excluirVaga() {
  const index = prompt("Enter the index of the vacancy you want to delete:");
  const vaga = vagas[index];

  const confirmation = confirm(
    "Are you sure you want to delete the job " +
      index +
      "?\n" +
      "Name: " +
      vaga.name +
      "\nDescrição: " +
      vaga.description +
      "\nData Limite: " +
      vaga.deadline
  );

  if (confirmation) {
    vagas.splice(index, 1); // splice ele exclui ou troca o elemento
    alert("Vaga Excluida");
  }
}

function exibirMenu() {
  const option = prompt(
    "Job Manager\n" +
      "\n\nChoose one of the options" +
      "\n1. List available jobs" +
      "\n2. Create a new vacancy" +
      "\n3. View a vacancy" +
      "\n4. Register a candidate for a vacancy" +
      "\n5. delete a vacancy" +
      "\n6. Exit"
  );

  return option;
}

function executar() {
  let option = "";

  do {
    option = exibirMenu();

    switch (option) {
      case "1":
        listarVagas();
        break;
      case "2":
        novaVaga();
        break;
      case "3":
        exibirVaga();
        break;
      case "4":
        inscreverCandidato();
        break;
      case "5":
        excluirVaga();
        break;
      case "6":
        alert("Exit");
        break;

      default:
        alert("Invalid option ");
    }
  } while (option !== "6");
}
executar();
