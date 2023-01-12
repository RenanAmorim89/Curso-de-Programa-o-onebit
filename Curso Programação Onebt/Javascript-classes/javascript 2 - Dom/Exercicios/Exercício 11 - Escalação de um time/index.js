function addPlayer() {
  const position = document.getElementById("position").value;
  const name = document.getElementById("name").value;
  const number = document.getElementById("number").value;

  // console.log({ position, name, number }); se colocarmos as ({}) ele vai considerar como um objeto, onde cada uma das chaves mostrara seu valor inserido.

  const confirmation = confirm("Escalar " + name + " como " + position + "?");

  if (confirmation) {
    const teamList = document.getElementById("teamList");
    const playerItem = document.createElement("li");
    playerItem.id = "player-" + number;
    playerItem.innerText = position + ": " + name + " (" + number + ")";
    teamList.appendChild(playerItem);

    document.getElementById("position").value = "";
    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
  }
}

function removePlayer() {
  const number = document.getElementById("numberToRemove").value;
  const playerToRemove = document.getElementById("player-" + number);

  const confirmation = confirm(
    "Remover o Jogador " + playerToRemove.innerText + "?"
  );

  if (confirmation) {
    // playerToRemove.remove() mais opção para remover elentos do Dom diretamento ultilizando o elemento sem o elemento pai.
    document.getElementById("teamList").removeChild(playerToRemove);
    document.getElementById("numberToRemove").value = "";
  }
}
