const DailyBorrower = require('../models/dailyborrower');
const MonthlyBorrower = require('../models/monthlyborrower');

exports.addDailyInstallment = async (req, res) => {
    try {
        const { borrowerId, installment } = req.body;
        console.log(borrowerId, installment)
        // Search for the borrower in the DailyInstallment model
        const borrower = await DailyBorrower.findById(borrowerId);
        console.log(borrower)
        if (!borrower) {
            return res.status(404).json({ message: 'Borrower not found' });
        }

        res.status(200).json({ message: 'Borrower found', borrower });
    } catch (error) {
        res.status(500).json({ message: 'Error processing request', error: error.message });
    }
}

