// Para armazenar as transações vamos criar uma variável no escopo global que começará como um array vazio.

// Obs.: repare que usando essa estratégia não precisaremos re-requisitar as transações atualizadas do backend a cada
// mundaça, podemos ir manipulando esse array a medida que elas são criadas/atualizadas/excluídas e assim economizar
// uso de banda e melhorar a performance da aplicação.
let transactions = [];

//Primeiro algumas funções auxiliares para criação dos elementos do DOM.
//criação de um container para os dados da transação e o nome.
function createTransactionContainer(id) {
  const container = document.createElement("div");
  container.classList.add("transaction");
  container.id = `transaction-${id}`;
  return container;
}

function createTransactionTitle(name) {
  const title = document.createElement("span");
  title.classList.add("transaction-title");
  title.textContent = name;
  return title;
}

// Essa função é a que cria um elemento para o valor da transação. Vamos usar a API de internacionalização do
//navegador para formatar valores numéricos em moedas através do Intl.NumberFormat(). Iremos criar um span para
//o valor da transação e formatá-lo para a moeda brasileira (BRL), adicionando também uma diferenciação entre
//valores positivos (crédito) e valores negativos (débito).

function createTransactionAmont(amount) {
  const span = document.createElement("span");

  const formater = Intl.NumberFormat("pt-BR", {
    compactDisplay: "long",
    currency: "BRL",
    style: "currency",
  });
  const formatedAmount = formater.format(amount);
  if (amount > 0) {
    span.textContent = `${formatedAmount} C`;
    span.classList.add("transaction-amount", "credit");
  } else {
    span.textContent = `${formatedAmount} D`;
    span.classList.add("transaction-amount", "debit");
  }
  return span;
}

// Para realizar a edição de uma transação vamos ter um botão na lista de transações que carregará os dados dela
// para o formulário onde poderão ser editadas e enviadas. Vamos criar uma função para criar o elemento do botão
// e então renderizar um botão para cada transação na tela:

function createTransactioBtn(transaction) {
  const editBtn = document.createElement("button");
  editBtn.classList.add("edit-btn");
  editBtn.textContent = "Editar";
  //vamos do dados da transação para o formulario
  editBtn.addEventListener("click", () => {
    document.querySelector("#id").value = transaction.id;
    document.querySelector("#name").value = transaction.name;
    document.querySelector("#amount").value = transaction.amount;
  });
  return editBtn;
}
// implementar a exclusão das transações. Para isso também criaremos um botão na tela para cada transação que ficará
// responsável pela exclusão da mesma. Depois de criado só precisamos renderizá-lo junto com as transações:

function createDeleteTransactionButton(id) {
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.textContent = "Excluir";
  deleteBtn.addEventListener("click", async () => {
    await fetch(`http://localhost:3000/transactions/${id}`, {
      method: "DELETE",
    });
    deleteBtn.parentElement.remove(); //excluir o container da tela, a div
    const indexToRemove = transactions.findIndex((t) => t.id === id);
    transactions.splice(indexToRemove, 1);
    updateBalance();
  });
  return deleteBtn;
}

//Criação de uma função que renderiza uma transação na tela.
//Obs.: repare como ela fica mais simples agora que já temos
//funções específicas para criação de cada elemento.

function renderTransaction(transaction) {
  const container = createTransactionContainer(transaction.id);
  const title = createTransactionTitle(transaction.name);
  const amount = createTransactionAmont(transaction.amount);
  const editBtn = createTransactioBtn(transaction);
  const deleteBtn = createDeleteTransactionButton(transaction.id);

  container.append(title, amount, editBtn, deleteBtn);
  document.querySelector("#transactions").append(container);
}

// Vamos agora passar para a criação de uma nova transação. Para isso vamos criar mais uma função,
// que ficará responsável por obter os valores do formulário, fazer a requisição POST e renderizar a
// transação devolvida na resposta.
// Obs.: repare que ao fim da função também limpamos o formulário e atualizamos o saldo.
// Obs².: repare também que precisamos criar um event listener para o form.

// Agora precisamos atualizar a função saveTransaction() para que faça uma requisição PUT se o input id estiver presente,
// ou seja, for uma transação já existente no backend, ou uma requisição POST se o input id não estiver presente:
// const id = document.querySelector('#id').value

async function saveTransaction(ev) {
  ev.preventDefault();

  const id = document.querySelector("#id").value;
  const name = document.querySelector("#name").value;
  const amount = parseFloat(document.querySelector("#amount").value);

  if (id) {
    //editar a transação com esse id
    const response = await fetch(`http://localhost:3000/transactions/${id}`, {
      method: "PUT",
      body: JSON.stringify({ name, amount }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // convertendo para um formato que JS entende
    const transaction = await response.json();
    //Atualizando e excluindo a transação antiga
    const indexToRemove = transactions.findIndex((t) => t.id === id);
    transactions.splice(indexToRemove, 1, transaction); //Excluindo o antigo e inserir o novo.
    document.querySelector(`#transaction-${id}`).remove(); //Excluir da tela.
    renderTransaction(transaction); //Renderizando
  } else {
    //Vai criar nova transação
    const response = await fetch("http://localhost:3000/transactions", {
      method: "POST",
      body: JSON.stringify({ name, amount }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // Vai converter para um objeto
    const transaction = await response.json();
    transactions.push(transaction);
    renderTransaction(transaction);
  }

  //O target é o proprio formulario
  ev.target.reset();
  //Calcular o saldo
  updateBalance();
}

//Vamos criar também uma função específica para fazer a requisição GET que obtém todas as transações do backend.
async function fetchTrabsactions() {
  return await fetch("http://localhost:3000/transactions").then((res) =>
    res.json()
  );
}

// Junto com ela criaremos uma função para exibir na tela (no elemento específico) o saldo total calculado com
// base nos valores de transações nesse array:
function updateBalance() {
  const balanceSpan = document.querySelector("#balance");
  const balance = transactions.reduce(
    (sum, transactions) => sum + transactions.amount,
    0
  );
  const formater = Intl.NumberFormat("pt-BR", {
    compactDisplay: "long",
    currency: "BRL",
    style: "currency",
  });
  balanceSpan.textContent = formater.format(balance);
}

//E iremos completar essa parte criando uma função setup() que será responsável por cuidar do carregamento
//inicial da página, obtendo as transações, renderizando-as na tela e exibindo o saldo:
async function setup() {
  const results = await fetchTrabsactions();
  transactions.push(...results);
  transactions.forEach(renderTransaction);
  updateBalance();
}

document.addEventListener("DOMContentLoaded", setup);
document.querySelector("form").addEventListener("submit", saveTransaction);
