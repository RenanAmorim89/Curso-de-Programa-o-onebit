const dayjs = require("dayjs");

function birthday(date) {
  const birthday = dayjs(date); // agora o birthday é uma data do dayjs
  // pegando o de hj no dayjs
  const today = dayjs(); // quando não passamos parametros o dia sera o de hj

  //1-quantos anos essa pessoa tem, vamos usar o metodo diff para calcular a diferença entre duas datas
  const ageinYears = today.diff(birthday, "year");
  const nexBirthday = birthday.add(ageinYears + 1, "year");
  const daysToNextBirthday = nexBirthday.diff(today, "day") + 1; // add o + 1 para ele arendondar para o dia certo

  console.log(`Idade: ${ageinYears}`);
  console.log(`Proximo Aniversario: ${nexBirthday.format("DD/MM/YYYY")}`);
  console.log(
    `Dias até Completar ${ageinYears + 1} anos: ${daysToNextBirthday}`
  );
}

birthday("1989-07-24"); // o ano precisa ser no padrao americano
