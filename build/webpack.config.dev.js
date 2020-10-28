const merge = require('webpack-merge')
const webpackBase = require('./webpack.config.base')

const devServer = {
  port: 9098,
  contentBase: '../dist',
  inline: true,
  historyApiFallback: true
}

module.exports = merge(webpackBase, {
  mode: 'development',
  devServer
})
