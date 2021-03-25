module.exports = function (api) {
  api.cache(true);

  console.log({
    babelEnv: process.env.BABEL_ENV,
    nodeEnv: process.env.NODE_ENV
  });

  return {
    presets: [
      '@babel/env',
      [
        '@babel/preset-react',
        {
          runtime: 'automatic',
          development: process.env.BABEL_ENV === 'development'
        }
      ]
    ]
  };
};
