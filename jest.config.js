module.exports = {
  testMatch: ['**/__tests__/**/*.js'],
  collectCoverage: true,
  coverageThreshold: {
    global: {
      lines: 80,
    },
  },
  collectCoverageFrom: [
    'app.js',
  ],
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
};