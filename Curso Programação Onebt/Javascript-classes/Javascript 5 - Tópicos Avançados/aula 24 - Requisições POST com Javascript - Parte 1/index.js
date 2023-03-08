//função para obter os artigos salvos no db.json e outra para renderizá-los na tela,
//além de chamar a função fetchArticles() assim que o documento estiver carregado;
function renderArticle(articleDate) {
  const article = document.createElement("article");
  article.classList.add("article");
  article.id = `article-${articleDate.id}`;

  const title = document.createElement("h3");
  title.classList.add("article-title");
  title.textContent = articleDate.title;

  const content = document.createElement("div");
  content.classList.add("article-content");
  content.innerHTML = articleDate.content;

  const author = document.createElement("div");
  author.classList.add("article-author");
  author.textContent = articleDate.author;

  article.append(title, author, content);
  document.querySelector("#articles").appendChild(article);
}

async function fetchArticles() {
  //Em uma unica linha: Dar o fetch, chamar o ponto then encadiar ele que ele vai devolver uma
  //outra Promise que tambem pode ser esperada com await entao o .them vai pegar o resultado da Promise
  // e vai converter ele para Json. em uma linha conseguimos a respota da API.
  const articles = await fetch("http://localhost:3000/articles").then((res) =>
    res.json()
  );
  articles.forEach(renderArticle);
}

document.addEventListener("DOMContentLoaded", () => {
  fetchArticles();
});

const form = document.querySelector("form");

form.addEventListener("submit", async (ev) => {
  ev.preventDefault();

  //Pegar as informações do artigo.
  //Vai ser um objeto, e  este objeto vai ter as propriedades que queremos enviar na requisição (uma string grandona)
  const articleDate = {
    title: document.querySelector("#title").value,
    author: document.querySelector("#author").value,
    content: document.querySelector("#content").value,
  };
  //Agora vamos enviar ele em uma requisição.
  //Vamos criar uma variavel para armazenar
  const response = await fetch("http://localhost:3000/articles", {
    method: "POST",
    //Agora vamos setar o cabeçalho, e isso é muito importante. Estamos informando que estamos enviando o conteudo em formato json
    headers: {
      "Content-Type": "application/json",
    },
    //Agora vamos passar o corpo do conteudo, temos que enviar ele no formato de string
    body: JSON.stringify(articleDate),
  });
  const savedArticle = await response.json();
  form.reset();
  renderArticle(savedArticle);
  console.log(savedArticle);
});
