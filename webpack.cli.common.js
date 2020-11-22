const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('../webpack.common');

const PATHS = {
  CLIENT_SRC: path.resolve(__dirname, 'src'),
  CLIENT_DIST: path.resolve(__dirname, 'build')
};

const clientCommon = {
  target: 'web',
  entry: path.resolve(PATHS.CLIENT_SRC, 'index.jsx'),
  devServer: {
    contentBase: PATHS.CLIENT_DIST,
    historyApiFallback: true,
    port: 8080,
    hot: true
  },
  resolve: {
    alias: {
      __cli: PATHS.CLIENT_SRC
    }
  },
  output: {
    publicPath: '/',
    path: PATHS.CLIENT_DIST
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
        use: 'eslint-loader',
        enforce: 'pre'
      },
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
    new CopyWebpackPlugin([
      {
        from: path.resolve(PATHS.CLIENT_SRC, 'images'),
        to: path.resolve(PATHS.CLIENT_DIST, 'images'),
        toType: 'dir'
      }
    ]),
    new HtmlWebpackPlugin({ template: path.resolve(PATHS.CLIENT_SRC, 'index.html') })
  ]
};

module.exports = merge(common, clientCommon);
