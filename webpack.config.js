const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

const PATHS = {
  SRC: path.resolve(__dirname, 'src'),
  BUILD: path.resolve(__dirname, 'dist')
};

module.exports = env => {
  const isProd = !!env.prod;

  return {
    target: 'web',
    mode: isProd ? 'production' : 'development',
    devtool: 'source-map',
    watch: !isProd,
    resolve: {
      extensions: ['.js', '.vue', '.json']
    },
    entry: path.resolve(PATHS.SRC, 'main', 'index.js'),
    output: {
      publicPath: '/',
      path: PATHS.BUILD,
      filename: `[name]${isProd ? '.[contenthash]' : ''}.bundle.js`
    },
    optimization: {
      // https://webpack.js.org/configuration/optimization/#optimizationmoduleids
      // deterministic option is useful for long term caching...
      moduleIds: 'deterministic',
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
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/env']
            }
          }
        },
        {
          test: [/\.css$/],
          use: [
            'vue-style-loader',
            'style-loader',
            'css-loader'
          ]
        }
      ]
    },
    plugins: [
      new ESLintPlugin({ extensions: ['js'], fix: true }),
      // new ESLintPlugin({ extensions: ['js', 'vue'], fix: true }),
      new CircularDependencyPlugin({
        exclude: /node_modules/,
        allowAsyncCycles: false,
        cwd: process.cwd()
      }),
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(PATHS.SRC, 'app', 'images'),
            to: path.resolve(PATHS.BUILD, 'public'),
            toType: 'dir'
          }
        ]
      }),
      new HtmlWebpackPlugin({ template: path.resolve(PATHS.SRC, 'main', 'index.html') }),
      new Dotenv({ path: path.resolve(__dirname, '.env') }),
      new VueLoaderPlugin()
    ]
  };
};
