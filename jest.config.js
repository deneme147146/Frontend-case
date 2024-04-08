module.exports = {
  moduleNameMapper: {
    '^.+\\.(css|less)$': '<rootDir>/config/CSSStub.js',
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.js'],
  testEnvironment: 'jsdom',
  coverageThreshold: {
    global: {
      statements: 3,
      branches: 3,
      functions: 3,
      lines: 3,
    },
  },
};
