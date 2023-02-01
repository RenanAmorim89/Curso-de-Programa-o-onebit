export function inline() {
  console.log("Export nomeado inline");
  //ele é inline porque precisa usar o nome exato dele e na mesma linha
  // esse pode ser exportado quantas vezes for preciso
}

export default function defaultInline() {
  console.log("Export defaut inline");
  //export default so poder ter apenas 1 por arquivo
  // ele pode ser uma função anonima
}
