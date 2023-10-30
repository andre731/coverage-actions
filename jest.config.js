module.exports = {
  testMatch: ['**/__tests__/**/*.js'],
  collectCoverage: true,
  coverageThreshold: {
    global: {
      lines: 80,
    },
  },
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
};