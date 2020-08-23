module.exports = {
  parser: "vue-eslint-parser",
  ignorePatterns: ['*/dist/*', '*/node_modules/*', '*.js'],
  plugins: ['@typescript-eslint', 'vue'],
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:vue/recommended'
  ],
  rules: {
    semi: ['error', 'always'],
    'no-console': ['warn', { allow: ['error'] }],
    'no-debugger': 'warn',
  }
};
