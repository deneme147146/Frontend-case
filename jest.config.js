module.exports = {
    moduleNameMapper: {
      '^.+\\.(css|less)$': '<rootDir>/config/CSSStub.js',
    },
    transform: {
          "^.+\\.jsx?$": "babel-jest"
        },
        setupFilesAfterEnv: ["<rootDir>/src/tests/setupTests.js"],
        testEnvironment: 'jsdom',
  };