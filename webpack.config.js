const path = require('path');
const BabelPluginSyntaxDynamicImport = require("@babel/plugin-syntax-dynamic-import");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: './app.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  watch: true,
  module: {
    rules: [{
      test: /\.js$/, // include .js files
      exclude: /node_modules/, // exclude any and all files in the node_modules folder
      use: [{
        loader: "babel-loader",
        // more options in the optional jshint object
        options: {  // ⬅ formally jshint property
          // camelcase: true,
          // emitErrors: false,
          // failOnHint: false
          presets: ['@babel/env', '@babel/react'],
          plugins: [
            BabelPluginSyntaxDynamicImport
          ]
        }
      }]
    },{
      test: /\.scss$/,
      use: [{
          loader: "style-loader"
      }, {
          loader: "css-loader"
      }, {
          loader: "sass-loader",
          options: {
              
          }
      }]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ]
};



// var path = require('path');
// var webpack = require('webpack');


// module.exports = {

//     entry : './app.js',
//     output:  { path: __dirname, filename: 'bundle.js'},

//     modules: {
//         loaders: [
//             {
//                 test : /\.js$/,
//                 loader : 'babel-loader',
//                 exclude : /node_modules/,
//                 query: {
//                     presets: ['es2015', 'react']
//                 }
//             }
//         ]
//     }
// }