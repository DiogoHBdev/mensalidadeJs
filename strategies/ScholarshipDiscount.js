const BaseDiscount = require('./BaseDiscount');

class ScholarshipDiscount extends BaseDiscount {
    apply(amount, student) {
        if (!student || !student.scholarship) return amount;
        const s = student.scholarship;
        if (s.type === 'full') return 0;
        if (s.type === 'partial') return +(amount * (1 - (s.percent || 50) / 100)).toFixed(2);
    return amount;
    }
}
module.exports = ScholarshipDiscount;
