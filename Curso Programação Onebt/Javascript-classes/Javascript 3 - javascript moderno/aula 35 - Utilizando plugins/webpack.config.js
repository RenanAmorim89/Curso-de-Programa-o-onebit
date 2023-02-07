// const path = require("path");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// module.exports = {
//   entry: {
//     index: "./src/index.js",
//   },
//   mode: "development",
//   module: {
//     rules: [
//       {
//         test: /\.css$/, //essa propriedade teste vai dizer para o webpack quais arquivos ele executar o louder. vamos usar "expressoes regulares" que sao formas de avaliar strings.
//         // $ significa que é para ele procurar css no final do arquivo.
//         use: [MiniCssExtractPlugin.loader, "css-loader"],
//       },
//     ],
//     plugins: [new MiniCssExtractPlugin()], //Para ultilizar nos vamos criar uma instancia com o"new", estamos usando uma função "construtora" uma funçõa que vai devolver o objeto da class MiniCssExtractPlugin
//   },
// };

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};
