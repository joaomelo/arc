const path = require('path');
const { merge } = require('webpack-merge');
const Dotenv = require('dotenv-webpack');
const NodemonPlugin = require('nodemon-webpack-plugin');
const serverCommon = require('./webpack.ser.common');

const serverDev = {
  mode: 'development',
  watch: true,
  plugins: [
    new Dotenv({ path: path.resolve(__dirname, 'server-dev.env') }),
    new NodemonPlugin({
      nodeArgs: '--enable-source-maps',
      verbose: true
    })
  ]
};

module.exports = merge(serverCommon, serverDev);
