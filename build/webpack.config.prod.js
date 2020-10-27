const merge = require('webpack-merge')
const cleanWebpack = require('clean-webpack-plugin')
const webpackBase = require('./webpack.config.base')

module.exports = merge(webpackBase, {
  mode: 'development',
  plugins: [
    new cleanWebpack(['../dist'])
  ]
})

