const Invoice = require('../domain/Invoice');

class InvoiceFactory {
    create({ id, student, baseAmount, dueDate, discountStrategy = null }) {
        return new Invoice({ id, student, baseAmount, dueDate, discountStrategy });
    }
}
module.exports = new InvoiceFactory();
