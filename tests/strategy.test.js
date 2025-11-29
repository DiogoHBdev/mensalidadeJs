const InvoiceFactory = require('../factory/InvoiceFactory');
const Student = require('../domain/Student');
const SiblingDiscount = require('../strategies/SiblingDiscount');
const ScholarshipDiscount = require('../strategies/ScholarshipDiscount');

test('Strategy: troca dinâmica de desconto (irmãos -> bolsa)', () => {
    const student = new Student({ id: 1, name: 'Ana', siblings: 2, scholarship: { type: 'partial', percent: 50 } });
    const invoice = InvoiceFactory.create({ id: 'T1', student, baseAmount: 1000, dueDate: '2025-12-10', discountStrategy: new SiblingDiscount() });

    expect(invoice.getTotal()).toBe(800); // 20% off

    invoice.setDiscountStrategy(new ScholarshipDiscount());
    expect(invoice.getTotal()).toBe(500); // 50% da bolsa parcial
});
