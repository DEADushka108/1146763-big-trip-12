'use strict';

const path = require(`path`);

module.exports = {
  mode: `development`,
  entry: `./src/main.js`,
  output: {
    filename: `bundle.js`,
    path: __dirname + `public`,
  },
  devServer: {
    contentbase: path.join(__dirname, `public`),
    compress: true,
    publicPath: `http://localhost:8080/`,
    watchContentBase: true,
    historyApiFallback: true,
    inline: true,
    progress: true,
  },
};
