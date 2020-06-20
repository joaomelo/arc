const webpack = require('client/config/webpack');
const Dotenv = require('client/config/dotenv-webpack');

const merge = require('client/config/webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    hot: true,
    port: 8080,
    historyApiFallback: true,
    noInfo: false,
    stats: 'normal',
    watchOptions: {
      poll: true
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv({ path: './.env.dev' })
  ]
});
