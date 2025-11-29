class ParentObserver {
    constructor(parentEmail) {
        this.parentEmail = parentEmail;
    }
    update(invoice) {
        // Aqui apenas simula envio — em projeto real usar um serviço de email
        console.log(`[AVISO PARENT] Email para ${this.parentEmail}: Boleto ${invoice.id} vence em ${invoice.dueDate}`);
    }
}
module.exports = ParentObserver;
