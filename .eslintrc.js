module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  plugins: [
    'jest',
    'jest-formatting'
  ],
  extends: [
    'standard',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:jest-formatting/recommended'
  ],
  rules: {
    semi: ['error', 'always'],
    'no-console': [
      'warn', {
        allow: ['warn', 'error', 'info']
      }
    ],
    'no-debugger': 'warn'
  },
  env: {
    browser: true,
    'jest/globals': true
  }
};
