/* eslint-disable indent */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    login: './src/index.js',
    agent: './src/agent.js',
    traveler: './src/traveler.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  watch: true,
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
      filename: './index.html',
      title: 'Login',
      chunks: ['login']
    }),
    new HtmlWebpackPlugin({
      template: './src/agent.html',
      filename: './agent.html',
      title: 'Agent',
      chunks: ['agent']
    }),
    new HtmlWebpackPlugin({
      template: './src/traveler.html',
      filename: './traveler.html',
      title: 'Traveler',
      chunks: ['traveler']
    })
  ],
  
  devServer: {
         contentBase: './dist'
  }
};


//new - March 2
/* eslint-disable indent */
// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// module.exports = {
//   entry: ['./src/index.js', './src/agent.js', './src/traveler.js'],
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'main.bundle.js',
//   },
//   devtool: 'inline-source-map',
//   mode: 'development',
//   // CSS and file (image) loaders
//   module: {
//     rules: [
//       {
//         test: /\.scss$/,
//         use: ['style-loader', 'css-loader', 'sass-loader'],
//       },
//       {
//         test: /\.(png|svg|jpg|gif)$/,
//         use: [
//               {
//                 loader: 'file-loader',
//                 options: {
//                   name: '[name].[ext]',
//                   outputPath: 'images/',
//                   publicPath: 'images/'
//                 }
//               }
//             ]
//       }
//     ],
//   },
//   // Below is needed for webpack-dev-server
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './src/index.html',
//       filename: './index.html',
//     }),
//     new HtmlWebpackPlugin({
//       template: './src/agent.html',
//       filename: './agent.html',
//     }),
//     new HtmlWebpackPlugin({
//       template: './src/traveler.html',
//       filename: './traveler.html',
//     })
//   ],
//   devServer: {
//          contentBase: './dist'
//   }
// };