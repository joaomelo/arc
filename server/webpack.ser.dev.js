const path = require('path');
const { merge } = require('webpack-merge');
const Dotenv = require('dotenv-webpack');
const serverCommon = require('./webpack.ser.common');

const serverDev = {
  mode: 'development',
  watch: true,
  plugins: [
    new Dotenv({ path: path.resolve(__dirname, 'server-dev.env') })
  ]
};

module.exports = merge(serverCommon, serverDev);
