const BaseDiscount = require('./BaseDiscount');
class SiblingDiscount extends BaseDiscount {
    apply(amount, student) {
        if (!student) return amount;
        if (student.siblings >= 2) return +(amount * 0.80).toFixed(2); // 20% off
        if (student.siblings === 1) return +(amount * 0.90).toFixed(2); // 10% off
    return amount;
    }
}
module.exports = SiblingDiscount;
