// Função para salvar as alteraçoẽs no Session Storage
document.getElementById("sessionBtn").addEventListener("click", function () {
  const input = document.getElementById("session"); //pegou o input
  // Sanvando o conteudo no Session storge
  sessionStorage.setItem("info", input.value);
  input.value = "";
});
// ler os dados da Session
document.getElementById("readSession").addEventListener("click", function () {
  const info = sessionStorage.getItem("info");
  alert(" A informação salva é: " + info);
});

// Função para salvar as alteraçoẽs no Local Storage
document.getElementById("localBtn").addEventListener("click", function () {
  const input = document.getElementById("local");
  localStorage.setItem("text", input.value);
  input.value = "";
});

document.getElementById("readLocal").addEventListener("click", function () {
  const t = localStorage.getItem("text");
  alert("O texto salvo no local storage é: " + t);
});

// Função para salvar as alteraçoẽs no cookie
document.getElementById("cookieBtn").addEventListener("click", function () {
  const input = document.getElementById("cookie");
  //cookieName=value; expires=UTCStringDate; path=/;

  const cookie = "info=" + input.value + ";"; //Sanvando ele com a chave info e com o valor do input (cookieName=value;)

  const expiration = "expires=" + new Date(2023, 1, 23) + ";"; // expires=UTCStringDate;
  const path = "path=/;"; //ele ficara salco em qual quer pagina (/)
  //Criando o Cookie
  document.cookie = cookie + expiration + path; //cookieName=value; expires=UTCStringDate; path=/;
  input.value = "";

  console.log(document.cookie);
});
document.getElementById("cookie2Btn").addEventListener("click", function () {
  const input = document.getElementById("cookie2");
  //cookieName=value; expires=UTCStringDate; path=/;

  const cookie = "text=" + input.value + ";"; //Sanvando ele com a chave info e com o valor do input (cookieName=value;)

  const expiration = "expires=" + new Date(2023, 1, 23) + ";"; // expires=UTCStringDate;
  const path = "path=/;"; //ele ficara salco em qual quer pagina (/)
  //Criando o Cookie
  document.cookie = cookie + expiration + path; //cookieName=value; expires=UTCStringDate; path=/;
  input.value = "";

  console.log(document.cookie);
});
