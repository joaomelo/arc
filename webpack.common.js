const CircularDependencyPlugin = require('circular-dependency-plugin');
const path = require('path');

const PATHS = {
  COMMON_SRC: path.resolve(__dirname, 'common')
};

module.exports = {
  devtool: 'source-map',
  resolve: {
    alias: {
      __com: PATHS.COMMON_SRC
    },
    extensions: ['.js', '.jsx', '.json']
  },
  plugins: [
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      allowAsyncCycles: false,
      cwd: process.cwd()
    })
  ]
};
