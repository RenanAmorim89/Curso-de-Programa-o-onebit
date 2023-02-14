import { Component } from "./Component.js";

export class Label extends Component {
  constructor(text, parent, options) {
    //Criando um "Objeto novo e vazio" com isso podemos passar quantos paramentros precisarmos que ele sempre vai juntar no "objeto vazio"
    super("label", parent, Object.assign({}, options, { textContent: text })); //textContent é a Propriedade para adicionar o texto no Dom
  }
}
