const path = require('path');
const { merge } = require('webpack-merge');
const Dotenv = require('dotenv-webpack');
const clientCommon = require('./webpack.cli.common');

const clientProd = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].bundle.js'
  },
  plugins: [
    new Dotenv({ path: path.resolve(__dirname, 'client-prod.env') })
  ]
};

module.exports = merge(clientCommon, clientProd);
