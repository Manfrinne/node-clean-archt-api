/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['**/src/**/*.ts', '!**/src/main/**', '!**/src/**/*protocols.ts', '!**/src/**/protocols/**'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: { '.+\\.ts$': 'ts-jest' },
};
