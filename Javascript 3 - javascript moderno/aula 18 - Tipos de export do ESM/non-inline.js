function group() {
  console.log("Export nomeado não-inline (agrupado");
}

function exportDefaut() {
  console.log("Export defaut não-inline");
}

export { group };
//Desta forma poderiamos agrupalas todas aqui

export default exportDefaut;
