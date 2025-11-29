// Interface/base for invoice and decorators
class BaseInvoice {
    getTotal() {
        throw new Error('getTotal must be implemented');
    }
}
module.exports = BaseInvoice;