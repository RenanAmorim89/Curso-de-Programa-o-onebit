// Usando o export do Esmodules, para testar no navegador
export class Component {
  #element = null;
  //Criando um Atributo Privado
  //options: vão ser passadas quais seram os atributos do html

  constructor(tag, parent, options) {
    this.tag = tag;
    this.parent = parent;
    this.options = options;
    this.build();
  }
  //Criando um elemento onde teremos acesso a leitura do #element
  getElement() {
    return this.#element;
  }

  // Vai criar um elemento com as informaçoes que temos acima
  build() {
    this.#element = document.createElement(this.tag);
    //Vamos pegar options e passar todas para o #elemento
    Object.assign(this.#element, this.options);
    //Vamos retornar a propria instancia, quado retornamos a isntancia o javascript entende quais os metodos que estão disponiveis.
    return this;
  }
  //Metodo render(faz o elemento aparecer na tela)
  render() {
    if (this.parent instanceof Component) {
      this.parent.getElement().append(this.#element);
    } else {
      document.querySelector(this.parent).append(this.#element); //se parent for uma string o metodo render ele vai procurar atraves do querySelector o elemento la na tela
    }
  }
}
