const path = require('path');
const { merge } = require('webpack-merge');
const Dotenv = require('dotenv-webpack');
const clientCommon = require('./webpack.cli.common');

const clientDev = {
  mode: 'development',
  output: {
    filename: '[name].bundle.js'
  },
  plugins: [
    new Dotenv({ path: path.resolve(__dirname, 'client-dev.env') })
  ]
};

module.exports = merge(clientCommon, clientDev);
