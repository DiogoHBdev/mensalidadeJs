class LoggerSingleton {
    constructor() {
        if (LoggerSingleton._instance) return LoggerSingleton._instance;
        LoggerSingleton._instance = this;
    }
    
    info(msg) { console.log('[INFO]', msg); }
    error(msg) { console.error('[ERROR]', msg); }
}
module.exports = new LoggerSingleton();
