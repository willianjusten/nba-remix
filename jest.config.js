/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  // A list of paths to directories that Jest should use to search for files in
  roots: ['<rootDir>'],

  // The test environment that will be used for testing
  testEnvironment: 'jsdom',

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: [
    'app/**/*.ts(x)',
    'api/**/*.(t|j)sx?$',
    '!app/root.tsx',
    '!app/entry.client.tsx',
    '!app/entry.server.tsx',
    '!app/routes/**/*.tsx',
    '!app/**/stories.tsx',
  ],

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: ['/node_modules/', '.cache/'],

  // A map from regular expressions to paths to transformers
  transform: {
    '\\.[jt]sx?$': ['babel-jest', { configFile: './.jest/babel.config.js' }],
  },

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
}
