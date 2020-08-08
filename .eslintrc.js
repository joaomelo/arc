module.exports = {
  parserOptions: {
    parser: 'babel-eslint'
  },
  ignorePatterns: ['*/dist/*'],
  rules: {
    semi: ['error', 'always'],
    'no-console': ['warn', { allow: ['error'] }],
    'no-debugger': 'warn',
  },
  globals: {
    firebase: 'readonly'
  },
  extends: [
    'standard',
    'plugin:vue/recommended',
  ],
  plugins: ['vue']
};
