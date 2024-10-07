const DailyBorrower = require("../models/dailyborrower");
const MonthlyBorrower = require("../models/monthlyborrower");

exports.addDailyInstallment = async (req, res) => {
  try {
    const { borrowerId, installment } = req.body;
    // Search for the borrower in the DailyInstallment model
    const borrower = await DailyBorrower.findById(borrowerId);

    if (!borrower) {
      return res.status(404).json({ message: "Borrower not found" });
    }

    try {
      const updatedBorrower = await DailyBorrower.findByIdAndUpdate(
        borrowerId,
        {
          $push: { installments: installment },
          $inc: {
            refundedAmount: installment.receivedAmount,
            balanceAmount: -installment.receivedAmount,
          },
          $set: {
            loanStatus:
              borrower.balanceAmount - installment.receivedAmount <= 0
                ? "closed"
                : borrower.loanStatus,
          },
        },
        { new: true }
      );
      res
        .status(200)
        .json({
          message: "Installment added successfully",
          borrower: updatedBorrower,
        });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error adding installment", error: error.message });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error processing request", error: error.message });
  }
};

exports.fetchDailyInstallment = async (req, res) => {
  try {
    const { borrowerId } = req.query;
    const borrower = await DailyBorrower.findById(borrowerId);
    if (!borrower) {
      return res.status(404).json({ message: "Borrower not found" });
    }
    console.log(borrower.installments);
    res
      .status(200)
      .json({ message: "Borrower found", installments: borrower.installments });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error processing request", error: error.message });
  }
};

exports.addDailyBorrowerDiscount = async (req, res) => {
  try {
    const { borrowerId, discountAmount } = req.body;
    const borrower = await DailyBorrower.findById(borrowerId);

    if (!borrower) {
      return res.status(404).json({ message: "Borrower not found" });
    }

    try {
      const updatedBorrower = await DailyBorrower.findByIdAndUpdate(
        borrowerId,
        {
          $set: {
            discount: discountAmount,
            loanStatus: borrower.balanceAmount - discountAmount <= 0 ? "closed" : borrower.loanStatus,
          },
          $inc: { balanceAmount: -discountAmount },
        },
        { new: true }
      );
      res.status(200).json({message: "Discount applied successfully",borrower: updatedBorrower,});
    } catch (error) {
      res.status(500).json({ message: "Error applying discount", error: error.message });
    }
  } catch (error) {
    res.status(500).json({ message: "Error processing request", error: error.message });
  }
};


exports.fetchMonthlyInstallment = async (req, res) => {
    try {
      const { borrowerId } = req.query;
      const borrower = await MonthlyBorrower.findById(borrowerId);
      if (!borrower) {
        return res.status(404).json({ message: "Borrower not found" });
      }
      console.log(borrower.installments);
      res
        .status(200)
        .json({ message: "Borrower found", installments: borrower.installments });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error processing request", error: error.message });
    }
  };