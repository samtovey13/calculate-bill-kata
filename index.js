function calculateBill(amount, vat, tip) {
    const errorMessage = "error"
    if (typeof amount !== 'number') {
        return errorMessage;
    };
    if (typeof vat !== 'number') {
        return errorMessage;
    };
    if (typeof tip !== 'number') {
        return errorMessage;
    };

    const total = amount + (amount * vat / 100) + (amount * tip / 100);

    return "£" + total;
};

module.exports = calculateBill;