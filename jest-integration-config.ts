const importedConfig = require('./jest.config');
importedConfig.testMatch = ['**/*.test.ts'];
module.exports = importedConfig;
