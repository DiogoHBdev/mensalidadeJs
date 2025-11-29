const ConfigA = require('../infra/ConfigSingleton');
const ConfigB = require('../infra/ConfigSingleton');

const LoggerA = require('../infra/LoggerSingleton');
const LoggerB = require('../infra/LoggerSingleton');

test('Singleton: instância única de Config e Logger', () => {
    expect(ConfigA).toBe(ConfigB);
    expect(LoggerA).toBe(LoggerB);
});
