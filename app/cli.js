const InvoiceFactory = require('../factory/InvoiceFactory');
const Student = require('../domain/Student');
const SiblingDiscount = require('../strategies/SiblingDiscount');
const ScholarshipDiscount = require('../strategies/ScholarshipDiscount');
const PunctualDiscount = require('../strategies/PunctualDiscount');
const LateFeeDecorator = require('../decorators/LateFeeDecorator');
const InterestDecorator = require('../decorators/InterestDecorator');
const Subject = require('../observers/Subject');
const ParentObserver = require('../observers/ParentObserver');
const EmailObserver = require('../observers/EmailObserver');
const Config = require('../infra/ConfigSingleton');
const Logger = require('../infra/LoggerSingleton');

// Rodapé exigido
const RODAPE = 'Desenvolvido por: Diogo H Bezerra';

function demo() {
    Logger.info('Iniciando demo do sistema de mensalidade');

    const student = new Student({ id: 1, name: 'João', responsibleEmail: 'pai@exemplo.com', siblings: 2, scholarship: { type: 'partial', percent: 50 } });

    // Fábrica cria invoice
    const invoice = InvoiceFactory.create({ id: 'INV-1', student, baseAmount: 1000, dueDate: '2025-12-10',discountStrategy: new SiblingDiscount() });

    // Observers para avisos
    const subject = new Subject();
    subject.attach(new ParentObserver(student.responsibleEmail));
    subject.attach(new EmailObserver('vencimento-template'));

    // Notifica vencimento
    subject.notify(invoice);

    // Troca dinâmica de estratégia (exemplo): aplicar bolsa em vez de desconto por irmãos
    invoice.setDiscountStrategy(new ScholarshipDiscount());

    console.log('Valor antes de atrasos:', invoice.getTotal());

    // Suponha 5 dias de atraso: aplica juros e multa via decorators (composição)
    let decorated = new InterestDecorator(invoice, 5, 0.02);
    decorated = new LateFeeDecorator(decorated, 15); // multa fixa de 15

    console.log('Valor com juros e multa (5 dias):', decorated.getTotal());

    console.log('\n---');
    console.log(RODAPE);
}
if (require.main === module) demo();

module.exports = { demo };
