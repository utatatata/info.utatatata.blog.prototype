const path = require('path')

const history = require('connect-history-api-fallback')
const convert = require('koa-connect')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: process.env.WEBPACK_SERVE ? 'development' : 'production',

  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'index.js',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
}

module.exports.serve = {
  port: 3000,
  open: true,

  content: [path.resolve(__dirname, 'public')],
  add: (app, middleware, options) => {
    app.use(convert(history()))
  },
}
