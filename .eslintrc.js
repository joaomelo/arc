module.exports = {
  parserOptions: {
    parser: 'babel-eslint'
  },
  ignorePatterns: ['*/dist/*'],
  env: {
    'jest/globals': true
  },  
  rules: {
    semi: ['error', 'always'],
    'no-debugger': 'off',
    'jest/no-test-callback': 'off',
    'jest/prefer-expect-assertions': 'off',
    'jest/no-hooks': 'off'    
  },
  extends: [
    'standard',
    'plugin:vue/recommended',
    'plugin:jest/all'
  ],
  plugins: ['vue', 'jest']
};
