const DailyBorrower = require('../models/dailyborrower');
const MonthlyBorrower = require('../models/monthlyborrower');
const FinanceBorrower = require('../models/financeborrower'); // Import FinanceBorrower model

exports.updateBorrowerDetails = async (req, res) => {
    const borrowerId = req.params.id;
    const { name, contact, address } = req.body;

    try {
        // Determine if the borrower is a daily, monthly, or finance borrower
        let updatedBorrower;

        // Try to update in DailyBorrower first
        updatedBorrower = await DailyBorrower.findByIdAndUpdate(
            borrowerId,
            { name, contact, address },
            { new: true } // Return the updated document
        );

        // If not found in DailyBorrower, try MonthlyBorrower
        if (!updatedBorrower) {
            updatedBorrower = await MonthlyBorrower.findByIdAndUpdate(
                borrowerId,
                { name, contact, address },
                { new: true } // Return the updated document
            );
        }

        // If not found in MonthlyBorrower, try FinanceBorrower
        if (!updatedBorrower) {
            updatedBorrower = await FinanceBorrower.findByIdAndUpdate(
                borrowerId,
                { name, contact, address },
                { new: true } // Return the updated document
            );
        }

        // If borrower is not found in any collection
        if (!updatedBorrower) {
            return res.status(404).json({ message: "Borrower not found" });
        }

        // Return the updated borrower details
        return res.status(200).json(updatedBorrower);
    } catch (error) {
        console.error("Error updating borrower:", error);
        return res.status(500).json({ message: "Error updating borrower details" });
    }
};
