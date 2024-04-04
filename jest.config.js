module.exports = {
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    moduleNameMapper: {
      '^axios$': '<rootDir>/node_modules/axios',
    },
    transformIgnorePatterns: [
      '/node_modules/(?!(axios)/)',
      '\\.css$',
    ],
  };