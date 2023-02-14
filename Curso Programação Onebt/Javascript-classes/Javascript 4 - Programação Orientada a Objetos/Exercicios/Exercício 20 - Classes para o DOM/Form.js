import { Component } from "./Component.js";

export class Form extends Component {
  constructor(parent, options) {
    super("Form", parent, options);
  }

  //metodo para add filhos a esse forme, para add outros elementos dentro dele.
  // com o operador spread e um arrey podemos colocar aqui quantos elementos precisarmos
  addChildren(...children) {
    children.forEach((child) => {
      this.getElement().appendChild(child.getElement());
    });
  }
}
