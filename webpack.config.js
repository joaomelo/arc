const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const PATHS = {
  SRC: path.resolve(__dirname, 'src'),
  BUILD: path.resolve(__dirname, 'build')
};

module.exports = env => {
  const isProd = !!env.prod;

  return {
    target: 'web',
    mode: isProd ? 'production' : 'development',
    devtool: 'source-map',
    resolve: {
      alias: {
        __cli: PATHS.SRC
      },
      extensions: ['.js', '.jsx', '.json']
    },
    entry: path.resolve(PATHS.SRC, 'index.jsx'),
    output: {
      publicPath: '/',
      path: PATHS.BUILD,
      filename: `[name]${isProd && '.[contenthash]'}.bundle.js`
    },
    devServer: {
      contentBase: PATHS.BUILD,
      historyApiFallback: true,
      port: 8080,
      hot: true
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
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/env', '@babel/preset-react', '@emotion/babel-preset-css-prop']
            }
          }
        },
        {
          test: [/\.css$/],
          use: ['style-loader', 'css-loader']
        }
      ]
    },
    plugins: [
      new ESLintPlugin({ extensions: ['js', 'jsx'], fix: true }),
      new CopyWebpackPlugin([
        {
          from: path.resolve(PATHS.SRC, 'images'),
          to: path.resolve(PATHS.BUILD, 'images'),
          toType: 'dir'
        }
      ]),
      new HtmlWebpackPlugin({ template: path.resolve(PATHS.SRC, 'index.html') }),
      new Dotenv({ path: path.resolve(__dirname, `env-${isProd ? 'prod' : 'dev'}.env`) }),
      new CircularDependencyPlugin({
        exclude: /node_modules/,
        allowAsyncCycles: false,
        cwd: process.cwd()
      })
    ]
  };
};
