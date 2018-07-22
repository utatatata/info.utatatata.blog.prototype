const path = require('path')

const history = require('connect-history-api-fallback')
const convert = require('koa-connect')

module.exports = {
  mode: process.env.WEBPACK_SERVE ? 'development' : 'production',

  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'index.bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
}

module.exports.serve = {
  port: 3000,
  open: true,

  content: [path.resolve(__dirname, 'public')],
  add: (app, middleware, options) => {
    app.use(convert(history()))
  },
}
