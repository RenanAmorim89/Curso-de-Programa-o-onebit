module.exports = {
  entry: {
    index: "./src/index.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/, //essa propriedade teste vai dizer para o webpack quais arquivos ele executar o louder. vamos usar "expressoes regulares" que sao formas de avaliar strings.
        // $ significa que é para ele procurar css no final do arquivo.
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
