module.exports = {
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.ts(x)?'],
  collectCoverage: true,

  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.next/',
    '/out/',
    '/public/',
    '/out_publish/',
    '/out_functions/',
  ],

  setupFilesAfterEnv: ['<rootDir>/.jest/jest-setup.ts'],
};
