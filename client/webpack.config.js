'use strict';
const CircularDependencyPlugin = require('circular-dependency-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');

const path = require('path');
const clientDist = path.resolve(__dirname, '../server/src/public');
const clientSrc = path.resolve(__dirname, './src');

module.exports = (env, argv) => {
  return {
    mode: env.prod ? 'production' : 'development',
    devtool: 'source-map',
    entry: `${clientSrc}/index.js`,
    output: {
      publicPath: '/',
      path: clientDist,
      filename: '[name].[contenthash].bundle.js'
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
          from: clientSrc + '/images',
          to: clientDist + '/images',
          toType: 'dir'
        }
      ]),
      new HtmlWebpackPlugin({ template: clientSrc + '/index.html' }),
      new VueLoaderPlugin(),
      new VuetifyLoaderPlugin()
    ]  
  }
};
