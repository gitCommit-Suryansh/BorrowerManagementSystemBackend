const mongoose = require('mongoose')

require('dotenv').config();

exports.connectToDB = async () => {
    try {
        mongoose
            .connect(process.env.MONGODB_URI)
            .then(function () {
                console.log("connected to the database")
            })
            .catch(function (err) {
                console.log(err)
            })

    } catch(err){
        console.log(err)
    }
}