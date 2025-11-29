const InvoiceFactory = require('../factory/InvoiceFactory');
const Student = require('../domain/Student');

test('Factory: cria invoice corretamente', () => {
    const student = new (require('../domain/Student'))({ id: 3, name: 'Marina' });
    const invoice = InvoiceFactory.create({ id: 'F1', student, baseAmount: 500, dueDate: '2025-12-11' });
    expect(invoice.id).toBe('F1');
    expect(invoice.student.name).toBe('Marina');
});
