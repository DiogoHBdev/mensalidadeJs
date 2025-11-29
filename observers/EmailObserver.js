class EmailObserver {
    constructor(templateName) {
        this.templateName = templateName;
    }

    update(invoice) {
        console.log(`[EMAIL] Usando template ${this.templateName} para notificar: invoice ${invoice.id} - due ${invoice.dueDate}`);
    }
}
module.exports = EmailObserver;
