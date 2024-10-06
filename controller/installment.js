const DailyBorrower = require('../models/dailyborrower');
const MonthlyBorrower = require('../models/monthlyborrower');

exports.addDailyInstallment = async (req, res) => {
    try {
        const { borrowerId } = req.body;

        // Search for the borrower in the DailyInstallment model
        const borrower = await DailyBorrower.findById(borrowerId);

        if (!borrower) {
            return res.status(404).json({ message: 'Borrower not found' });
        }

        // If the borrower is found, you can proceed with adding the installment
        // Add your logic here for adding the installment

        // For now, we'll just return a success message
        console.log(borrower)
        res.status(200).json({ message: 'Borrower found', borrower });
    } catch (error) {
        res.status(500).json({ message: 'Error processing request', error: error.message });
    }
}

