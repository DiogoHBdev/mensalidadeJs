const BaseInvoice = require('./BaseInvoice');

class LateFeeDecorator extends BaseInvoice {
    constructor(wrappedInvoice, fixedFee = 10) {
        super();
        this.wrappedInvoice = wrappedInvoice;
        this.fixedFee = fixedFee;
    }

    getTotal() {
        return +(this.wrappedInvoice.getTotal() + this.fixedFee).toFixed(2);
    }
}
module.exports = LateFeeDecorator;
