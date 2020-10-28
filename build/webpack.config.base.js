const path = require('path');  // 路径处理模块
const webpack = require('webpack');  // 这个插件不需要安装，是基于webpack的，需要引入webpack模块
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 引入HtmlWebpackPlugin插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const date = new Date()

module.exports = {
  mode: 'development',
  entry: {
    'main': path.join(__dirname, "../src/index.js"),
    'second': path.join(__dirname, "../src/second.js")
  },
  output: {
    path: path.join(__dirname, "../dist"),
    filename: '[name].js?v=[hash:6]'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader'
        ],
        // 排除 node_modules 目录下的文件，node_modules 目录下的文件都是采用的 ES5 语法，没必要再通过 Babel 去转换
        exclude: path.resolve(__dirname, '..','node_modules'),
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin(date.toString()),  // new一个插件的实例 
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../public/index.html")
    }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: `[name].css?v=[contenthash:8]`
    })
  ]
}
