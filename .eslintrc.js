module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  plugins: [
    'jest',
    'jest-formatting'
  ],
  extends: [
    'standard',
    'plugin:react/recommended',
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
    'no-debugger': 'warn',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  env: {
    browser: true,
    'jest/globals': true
  }
};
