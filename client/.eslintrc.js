module.exports = {
  parserOptions: {
    parser: 'babel-eslint'
  },
  ignorePatterns: ['*/dist/*'],
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