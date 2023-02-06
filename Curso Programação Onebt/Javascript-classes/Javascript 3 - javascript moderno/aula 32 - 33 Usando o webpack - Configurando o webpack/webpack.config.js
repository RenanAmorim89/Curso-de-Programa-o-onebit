const path = require("path"); //importando um modulo do node - o path ele é um modulo epecifico para trabalhar com caminho

module.exports = {
  entry: {
    main: "./src/index.js",
    hello: "./src/hello.js",
  },
  mode: "production",
  output: {
    path: path.resolve(__dirname, "public"), //ele faz um caminho absoluto - __dirname faz um caminho ate a onde nos esatamos
    filename: "[name].bundle.min.js", //mudando o nome do arquivo manualmente. quando temos de 1 ponto de entrada precisamos usar [name]
  },
};
