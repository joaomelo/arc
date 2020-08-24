module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: 'server',
    project: ['./tsconfig.json']
  },
  ignorePatterns: ['*/dist/*', '*/node_modules/*', '*.js'],
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  rules: {
    semi: ['error', 'always'],
    'no-console': ['warn', { allow: ['error'] }],
    'no-debugger': 'warn',
  }
};
