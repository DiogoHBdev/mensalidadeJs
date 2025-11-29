const BaseInvoice = require('./BaseInvoice');

class InterestDecorator extends BaseInvoice {
    constructor(wrappedInvoice, daysLate = 0, dailyRate = 0.02) {
        super();
        this.wrappedInvoice = wrappedInvoice;
        this.daysLate = daysLate;
        this.dailyRate = dailyRate;
    }

    getTotal() {
        const base = this.wrappedInvoice.getTotal();
        if (this.daysLate <= 0) return base;
        const factor = 1 + this.daysLate * this.dailyRate; // simples
        return +(base * factor).toFixed(2);
    }
}
module.exports = InterestDecorator;
