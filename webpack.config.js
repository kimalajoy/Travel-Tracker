/* eslint-disable indent */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var package = require('../package.json');

module.exports = {
  entry: {
    pageOne: './src/index.js',
    pageTwo: './src/agent.js',
    vendor: Object.keys(package.dependencies)
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  devtool: 'inline-source-map',
  mode: 'development',
  // CSS and file (image) loaders
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'images/',
                  publicPath: 'images/'
                }
              }
            ]
      }
    ],
  },
  // Below is needed for webpack-dev-server
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './dist/index.html',
      title: 'Login',
      chunks: ['vendor', 'pageOne']
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './dist/agent.html',
      title: 'Agent',
      chunks: ['vendor', 'pageTwo']
    })
  ],
  
  devServer: {
         contentBase: './dist'
  }
};