const path = require("path");
const pkg = require("./package.json");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./"),
    filename: "./index.js",
    library: pkg.name,
    libraryTarget: "commonjs2",
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/(node_modules)/],
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js"],
  },
};
