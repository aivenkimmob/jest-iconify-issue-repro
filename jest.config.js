module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', './'],
  moduleNameMapper: {
    '\\.css$': '<rootDir>/__mocks__/css.js',
    // 'react': 'node_modules/react/index.js',
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
};
