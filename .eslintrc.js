module.exports = {
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    'cypress/globals': true
  },
  rules: {
    semi: ['error', 'always']
  },
  extends: [
    'standard',
    'plugin:vue/recommended',
    'plugin:cypress/recommended'
  ],
  plugins: ['vue', 'cypress']
};
