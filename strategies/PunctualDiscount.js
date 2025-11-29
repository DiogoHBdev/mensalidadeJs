const BaseDiscount = require('./BaseDiscount');

class PunctualDiscount extends BaseDiscount {
    constructor(daysLate = 0) {
        super();
        this.daysLate = daysLate;
    }

    apply(amount, student) {
        // Se não houve atraso, aplica 5% de desconto por pontualidade
        if (this.daysLate === 0) return +(amount * 0.95).toFixed(2);
        return amount;
    }
}
module.exports = PunctualDiscount;
