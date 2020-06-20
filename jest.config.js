module.exports = {
  collectCoverage: true,
  coverageDirectory: 'coverage/',
  collectCoverageFrom: [
    'client/src/*.js',
    '!client/src/**/index.js'
  ]
};