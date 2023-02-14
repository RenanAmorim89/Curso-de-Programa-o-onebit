import { Component } from "./Component.js";

export class Input extends Component {
  constructor(parent, options) {
    super("input", parent, options); //Importando parent e options da class mae
  }
}
