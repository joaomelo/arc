const Dotenv = require('client/config/dotenv-webpack');

const merge = require('client/config/webpack-merge');
const common = require('./webpack.common.js.js.js');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new Dotenv({ path: './env/prod.env' })
  ]
});
