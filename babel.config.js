module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['@babel/env', '@babel/preset-react', '@emotion/babel-preset-css-prop'],
    plugins: ['@babel/plugin-proposal-class-properties']
  };
};
