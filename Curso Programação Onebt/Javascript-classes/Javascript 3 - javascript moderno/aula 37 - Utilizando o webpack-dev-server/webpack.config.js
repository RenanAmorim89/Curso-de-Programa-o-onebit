// webpack.config.js
const path = require("path");

module.exports = {
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    compress: true, //ele vai empacotar como ser fosse o Rar
    port: 8000, //podemos trocar a porta a onde ele roda
  },
  entry: {
    index: "./src/index.js",
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /.js$/,
        use: ["babel-loader"],
      },
    ],
  },
  output: {
    filename: "[name].min.js",
  },
};
