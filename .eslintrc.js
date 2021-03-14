module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json'
  },  
  plugins: [
    '@typescript-eslint',
    'jest',
    'jest-formatting'
  ],
  extends: [
    'standard-with-typescript',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:jest-formatting/recommended'
  ],
  rules: {
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
