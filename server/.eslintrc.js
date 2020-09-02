module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: 'server',
    project: ['./tsconfig.json']
  },
  plugins: [
    '@typescript-eslint',
    'import'
  ],
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  rules: {
    semi: ['error', 'always'],
    'no-console': ['warn', { allow: ['error'] }],
    'no-debugger': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'off', // could not make lint 'see' alias path on import
    '@typescript-eslint/no-unsafe-assignment': 'off' // could not make lint 'see' alias path on import
  },
  settings: {
    'import/resolver': {
      'typescript': {
        "project": "./server/tsconfig.json"
      },      
    }
  }
};
