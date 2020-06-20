'use strict';
const CircularDependencyPlugin = require('client/config/circular-dependency-plugin');
const HtmlWebpackPlugin = require('client/config/html-webpack-plugin');
const FaviconsWebpackPlugin = require('client/config/favicons-webpack-plugin');
const CopyWebpackPlugin = require('client/config/copy-webpack-plugin');
const { VueLoaderPlugin } = require('client/config/vue-loader');
const VuetifyLoaderPlugin = require('client/config/vuetify-loader/lib/plugin');

const path = require('path');
const clientDist = path.resolve(__dirname, '../dist');
const clientSrc = path.resolve(__dirname, '../src');

module.exports = {
  entry: './client/src/app.js',
  devtool: 'source-map',
  output: {
    publicPath: '/',
    path: clientDist,
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js'
  },
  resolve: {
    alias: {
      __cli: clientSrc
    },
    extensions: ['.js', '.json', '.vue']
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
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: [/\.css$/, /\.s(c|a)ss$/],
        use: [
          'vue-style-loader',
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('client/config/sass'),
              sassOptions: {
                fiber: require('client/config/fibers'),
                indentedSyntax: true
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      allowAsyncCycles: false,
      cwd: process.cwd()
    }),
    new CopyWebpackPlugin([
      {
        from: clientSrc + '/static',
        to: clientDist + '/static',
        toType: 'dir'
      }
    ]),
    new HtmlWebpackPlugin({ template: clientSrc + '/index.html' }),
    new FaviconsWebpackPlugin({
      logo: clientSrc + '/static/favicon.png',
      inject: true
    }),
    new VueLoaderPlugin(),
    new VuetifyLoaderPlugin()
  ]
};
