'use strict';
const CircularDependencyPlugin = require('circular-dependency-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');

const path = require('path');
const clientDist = path.resolve(__dirname, './dist');
const clientSrc = path.resolve(__dirname, './src');

module.exports = function (env, argv) {
  const isProd = env === 'prod';

  return {
    mode: isProd ? 'production' : 'development',
    devtool: isProd ? 'source-map' : 'eval',
    entry: `${clientSrc}/index.js`,
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
      new CleanWebpackPlugin({ cleanStaleWebpackAssets: isProd }),
      new CopyWebpackPlugin([
        {
          from: clientSrc + '/static',
          to: clientDist + '/static',
          toType: 'dir'
        }
      ]),
      new HtmlWebpackPlugin({ template: clientSrc + '/index.html' }),
      new FaviconsWebpackPlugin({
        mode: 'webapp',
        devMode: 'webapp',
        logo: clientSrc + '/static/logo.png',
        inject: true,
        outputPath: '/static',
        prefix: 'static/'
      }),
      new VueLoaderPlugin(),
      new VuetifyLoaderPlugin()
    ]
  };
};
