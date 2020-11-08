const path = require('path');
const { merge } = require('webpack-merge');
const Dotenv = require('dotenv-webpack');
const serverCommon = require('./webpack.ser.common');

const serverProd = {
  mode: 'production',
  plugins: [
    new Dotenv({ path: path.resolve(__dirname, 'server-prod.env') })
  ]
};

module.exports = merge(serverCommon, serverProd);
