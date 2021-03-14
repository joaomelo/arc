module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts'],
  coverageDirectory: 'tests/coverage',
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/src/**/?(*.)+(spec|test).[jt]s?(x)'],
  /*
    below we avoid auto use of babel since ts-jest is the chosen transpiler.
    more here: https://jestjs.io/docs/getting-started#using-babel
  */
  transform: {}
};
