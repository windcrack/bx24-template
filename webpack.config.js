const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");


const config = {
  entry: ['react-hot-loader/patch', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
      new HtmlWebpackPlugin({
        meta:{viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'},
        title: 'Приложение на Bitrix24',
        templateContent: `<div id="app"></div>`
      }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  devServer: {
    port: 5000,
    onAfterSetupMiddleware: function (devServer) {
      devServer.app.post('*', (req, res) => {
        res.redirect(req.originalUrl);
      });
    },
    static: {
      directory: './dist',
    },
  },
};

module.exports = config;
