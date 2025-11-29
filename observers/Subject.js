class Subject {
    constructor() {
        this.observers = [];
    }
    attach(observer) {
        this.observers.push(observer);
    }
    detach(observer) {
        this.observers = this.observers.filter(o => o !== observer);
    }
    notify(payload) {
        this.observers.forEach(o => {
            try { o.update(payload); } catch (err) { /* swallow */ }
        });
    }
}
module.exports = Subject;
