// Vamos criar uma função async que será responsável para fazer a requisição e vamos executá-la
//assim que a página for carregada:

//Obs.: é importante que ela seja async pois a função que faz a requisição HTTP retorna uma promise,
//então será mais fácil trabalhar utilizando a sintaxe async/await.

//Dentro da função iremos chamar a função fetch(), ela faz para nós a requisição HTTP e
//devolve a promise de uma resposta HTTP, portanto iremos chamá-la e usar o await para esperar pela resposta.
//Também passaremos como parâmetro a url que estamos requisitando:

// Temos uma resposta, mas para usar os dados recebidos nela precisamos converter esses dados para um
// formato que pode ser entendido pelo javascript. Para isso, a própria resposta do fetch() contém um
// método especial chamado json(). Esse método serve especificamente para obter o conteúdo json da
// resposta de forma que pode ser manipulado. Ele também retorna uma promise, então também utilizaremos o await:

function creatCoutryCard(country) {
  const card = document.createElement("div");
  card.classList.add("country");

  const countryName = country.name.common;
  const name = document.createElement("h2");
  name.textContent = countryName;

  const flag = document.createElement("img");
  flag.src = country.flags.svg;
  flag.alt = countryName;

  card.append(name, flag);
  document.querySelector("#countries").append(card);
}

async function getCountries() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const coutries = await response.json();

  coutries.forEach(creatCoutryCard);
}

getCountries();
