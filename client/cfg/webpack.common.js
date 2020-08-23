'use strict';
const CircularDependencyPlugin = require('circular-dependency-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');

const path = require('path');
const clientDist = path.resolve(__dirname, '../../server/src/static');
const clientSrc = path.resolve(__dirname, '../src');

module.exports = {
  devtool: 'source-map',
  entry: `${clientSrc}/index.ts`,
  output: {
    publicPath: '/',
    path: clientDist
  },
  optimization: {
    moduleIds: 'hashed',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  resolve: {
    alias: {
      __cli: clientSrc
    },
    extensions: ['.ts', '.js', '.json', '.vue']
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
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: [/\.css$/],
        use: [
          'vue-style-loader',
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: [/\.s(c|a)ss$/],
        use: [
          'vue-style-loader',
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sassOptions: {
                fiber: false,
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
    new VueLoaderPlugin(),
    new VuetifyLoaderPlugin()
  ]
};
