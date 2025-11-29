const InvoiceFactory = require('../factory/InvoiceFactory');
const Student = require('../domain/Student');
const SiblingDiscount = require('../strategies/SiblingDiscount');
const InterestDecorator = require('../decorators/InterestDecorator');
const LateFeeDecorator = require('../decorators/LateFeeDecorator');

test('Decorator: composição de multa e juros', () => {
    const student = new Student({ id: 2, name: 'Carlos', siblings: 0 });
    const invoice = InvoiceFactory.create({ id: 'D1', student, baseAmount: 1000, dueDate: '2025-12-10',discountStrategy: new SiblingDiscount() });

    // Sem desconto
    expect(invoice.getTotal()).toBe(1000);

    // 3 dias de juros (2% ao dia) + multa fixa 10
    const withInterest = new InterestDecorator(invoice, 3, 0.02);
    const withMulta = new LateFeeDecorator(withInterest, 10);
    
    // cálculo: 1000 * (1 + 3*0.02) = 1060, +10 = 1070
    expect(withMulta.getTotal()).toBe(1070);
    });
