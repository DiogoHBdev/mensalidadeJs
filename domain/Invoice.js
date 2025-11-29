const BaseInvoice = require('../decorators/BaseInvoice');
class Invoice extends BaseInvoice {
    constructor({ id, student, baseAmount, dueDate, discountStrategy = null })
{
        super();
        this.id = id;
        this.student = student;
        this.baseAmount = baseAmount;
        this.dueDate = dueDate; // Date
        this.discountStrategy = discountStrategy; // Strategy pattern
    }
    setDiscountStrategy(strategy) {
        this.discountStrategy = strategy;
    }
    getAmountBeforeDecorators() {
        let amount = this.baseAmount;
        if (this.discountStrategy) amount = this.discountStrategy.apply(amount,
    this.student);
        return amount;
    }
    getTotal() {
        // Base invoice behaviour — will be wrapped by decorators when necessary
        return this.getAmountBeforeDecorators();
    }
}
module.exports = Invoice;
