module.exports = {
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    semi: ['error', 'always']
  },
  extends: ['plugin:vue/recommended', 'standard'],
  plugins: ['vue']
};
