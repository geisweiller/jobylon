module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
    // '^.+\\.(svg|png|jpg)$': 'jest-svg-transformer',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  moduleNameMapper: {
    '^.+\\.(svg|jpeg)$': '<rootDir>/__mocks__/svgrMock.js',
    // '\\.(css|less)$': 'identity-obj-proxy',
  },
};
