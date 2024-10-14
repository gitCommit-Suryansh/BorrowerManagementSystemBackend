const DailyBorrower = require('../models/dailyborrower');
const MonthlyBorrower = require('../models/monthlyborrower');
const FinanceBorrower = require('../models/financeborrower'); // Import FinanceBorrower model

exports.deleteBorrower=async(req,res)=>{
const { id } = req.params;
try {
  const dailyBorrower = await DailyBorrower.findByIdAndDelete(id);
  if (!dailyBorrower) {
    const monthlyBorrower = await MonthlyBorrower.findByIdAndDelete(id);
    if (!monthlyBorrower) {
      const financeBorrower = await FinanceBorrower.findByIdAndDelete(id);
      if (!financeBorrower) {
        return res.status(404).json({ message: "Borrower not found" });
      } else {
        return res.status(200).json({ message: "Finance Borrower deleted successfully" });
      }
    } else {
      return res.status(200).json({ message: "Monthly Borrower deleted successfully" });
    }
  } else {
    return res.status(200).json({ message: "Daily Borrower deleted successfully" });
  }
} catch (error) {
  console.error(error);
  return res.status(500).json({ message: "Internal Server Error" });
}
}