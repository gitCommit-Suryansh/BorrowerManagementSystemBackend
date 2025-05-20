const mongoose = require('mongoose');
require('dotenv').config();

exports.connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 20000 // 20 seconds timeout for DB connection
        });

        console.log("✅ Connected to MongoDB successfully");
    } catch (err) {
        console.error("❌ MongoDB connection error:", err.message);
    }
};
