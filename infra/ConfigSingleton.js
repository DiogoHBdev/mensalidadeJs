class ConfigSingleton {
    constructor() {
        if (ConfigSingleton._instance) return ConfigSingleton._instance;
        this.appName = 'Mensalidade Escolar';
        this.currency = 'BRL';
        ConfigSingleton._instance = this;
    }
}
module.exports = new ConfigSingleton();
