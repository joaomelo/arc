'use strict';
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

const path = require('path');
const dist = path.resolve(__dirname, '../dist');
const src = path.resolve(__dirname, '../src');

module.exports = {
  // babel-polyfill as the first entry enables the use of async syntax
  entry: ['babel-polyfill', './src/app.js'],
  output: {
    publicPath: '/',
    path: dist,
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      '@': src
    },
    extensions: ['.wasm', '.mjs', '.js', '.json', '.vue']
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        use: 'eslint-loader',
        enforce: 'pre'
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: [/\.scss$/, /\.css$/],
        use: ['vue-style-loader', 'style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: src + '/static',
        to: dist + '/static',
        toType: 'dir'
      }
    ]),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({ template: src + '/index.html' }),
    new VueLoaderPlugin()
  ]
};
