module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  plugins: ['vue'],
  extends: [
    'standard',
    'plugin:vue/recommended',
  ],
  rules: {
    semi: ['error', 'always'],
    'no-console': ['warn', { allow: ['error'] }],
    'no-debugger': 'warn',
  },
};