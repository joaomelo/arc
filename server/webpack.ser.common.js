const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { merge } = require('webpack-merge');
const common = require('../webpack.common');

const PATHS = {
  SERVER_SRC: path.resolve(__dirname, 'src'),
  SERVER_DIST: path.resolve(__dirname, 'build')
};

const serverCommon = {
  target: 'node',
  node: {
    __dirname: false
  },
  externals: [nodeExternals()],
  entry: path.resolve(PATHS.SERVER_SRC, 'index.js'),
  resolve: {
    alias: {
      __ser: PATHS.SERVER_SRC
    }
  },
  output: {
    publicPath: '/',
    path: PATHS.SERVER_DIST,
    filename: 'server.js'
  }
};

module.exports = merge(common, serverCommon);
