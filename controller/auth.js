const DailyBorrower = require('../models/dailyborrower');
const MonthlyBorrower = require('../models/monthlyborrower');
const FinanceBorrower = require('../models/financeborrower'); // Import the FinanceBorrower model

exports.registerDailyBorrower = async (req, res) => {
    try {
        const { name, contact, aadharNumber, chequeNumber,principleAmount,refundAmount,emiAmount,loanScheme,tenure,loanStartDate, loanEndDate, balanceAmount,address ,reference} = req.body;
        const dailyBorrower = new DailyBorrower({
            name,
            contact,
            aadharNumber,
            chequeNumber,
            principleAmount,
            refundAmount,
            emiAmount,
            loanScheme,
            loanStartDate,
            loanEndDate,
            balanceAmount,
            tenure,
            address,
            reference
        });

        await dailyBorrower.save();
        res.status(200).json({ message: 'Daily Borrower registered successfully', dailyBorrower });
    } catch (error) {
        res.status(500).json({ message: 'Error registering daily borrower', error: error.message });
    }
};

exports.registerMonthlyBorrower = async (req, res) => {
    try {
        const { name, contact, aadharNumber, chequeNumber, principleAmount, interestPercentage, interestAmount, loanScheme, tenure, loanStartDate, loanEndDate, balanceAmount , address , reference } = req.body;
        const monthlyBorrower = new MonthlyBorrower({
            name,
            contact,
            aadharNumber,
            chequeNumber,
            principleAmount,
            interestPercentage,
            interestAmount,
            loanScheme,
            tenure,
            loanStartDate,
            loanEndDate,
            balanceAmount,
            address,
            reference
        });

        await monthlyBorrower.save();
        res.status(200).json({ message: 'Monthly Borrower registered successfully', monthlyBorrower });
    } catch (error) {
        res.status(500).json({ message: 'Error registering monthly borrower', error: error.message });
    }
};

exports.registerFinanceBorrower = async (req, res) => {
    try {
        const { name, contact, aadharNumber, chequeNumber, principleAmount, interestPercentage, refundAmount, loanScheme, tenure,emiAmount, loanStartDate, loanEndDate, balanceAmount, address, discount,reference } = req.body;
        const financeBorrower = new FinanceBorrower({
            name,
            contact,
            aadharNumber,
            chequeNumber,
            principleAmount,
            interestPercentage,
            refundAmount,
            loanScheme,
            tenure,
            emiAmount,
            loanStartDate,
            loanEndDate,
            balanceAmount,
            address,
            discount,
            reference
        });

        await financeBorrower.save();
        res.status(200).json({ message: 'Finance Borrower registered successfully', financeBorrower });
    } catch (error) {
        res.status(500).json({ message: 'Error registering finance borrower', error: error.message });
    }
};
