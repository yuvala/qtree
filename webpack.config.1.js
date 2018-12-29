// webpack v4
const path = require('path');
// update from 23.12.2018


const nodeExternals = require('webpack-node-externals');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');
// ./src/js/app.js --output ./dist/app.js --watch
module.exports = {
  entry: { main: './src/js/app.js'},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  //  filename: '[name].[chunkhash].js'
  }
  ,
  target: 'node', // update from 23.12.2018
  externals: [nodeExternals()], // update from 23.12.2018
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
      ,
      {
        test: /\.css$/,
        use:  [  'style-loader', miniCssExtractPlugin.loader, 'css-loader']
        // use: ExtractTextPlugin.extract(
        //   {
            
        //     fallback: 'style-loader',
        //     use: ['css-loader']
        //   })
      }
    ]
  }
  ,
  plugins: [
    new miniCssExtractPlugin({
        filename: 'style.css',
      })
  ]
};