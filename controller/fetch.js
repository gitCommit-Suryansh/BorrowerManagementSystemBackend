const DailyBorrower = require('../models/dailyborrower');
const MonthlyBorrower = require('../models/monthlyborrower');

exports.fetchDailyBorrower = async (req, res) => {
    try {
        const dailyBorrowers = await DailyBorrower.find();
        res.status(200).json({ dailyBorrowers });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching daily borrowers', error: error.message });
    }
}

exports.fetchMonthlyBorrower = async (req, res) => {
    try {
        const monthlyBorrowers = await MonthlyBorrower.find();
        res.status(200).json({ monthlyBorrowers });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching monthly borrowers', error: error.message });
    }
}