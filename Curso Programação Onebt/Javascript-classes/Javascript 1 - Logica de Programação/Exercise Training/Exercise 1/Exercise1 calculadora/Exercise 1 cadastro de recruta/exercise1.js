const firstName = prompt("Qual seu primeiro nome?");
const lastName = prompt("Qual seu untimo name?");
const fieldOfStudy = prompt("Qual sua especialidade?");
const yearOfBirth = prompt("Infomr o ano de nascimento");

alert(
  "Confira suas infortmações" +
    "\n\n Primeiro nome: " +
    firstName +
    "\n Ultimo nome: " +
    lastName +
    "\n Especialidade: " +
    fieldOfStudy +
    "\n Idade Atual: " +
    (2022 - yearOfBirth)
);
