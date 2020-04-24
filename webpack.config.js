const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./"),
    filename: "./index.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            exclude: [/(node_modules)/],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js"],
  },
};
