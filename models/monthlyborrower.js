const mongoose = require('mongoose');

const installmentSchema = new mongoose.Schema({
    date: {
      type: Date,
      required: true
    },
    amount: {
      type: Number,
      required: true
    },
    paid: {
      type: Boolean,
      default: false
    },
    paidOn:{
        type:Date,
        required:true
    },
    remark:{
        type:String,
        default:"Amount Paid"
    }
  });


const monthlyborrowerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    aadharNumber: {
        type: String,
        required: true,
    },
    chequeNumber: {
        type: String,
        required: true
    },
    principleAmount: {
        type: Number,
        required: true
    },
    interestPercentage: {
        type: Number,
        required: true
    },
    interestAmount: {
        type: Number,
        required: true
    },
    loanScheme: {
        type: String,
        required: true,
        enum: ['monthly']
    },
    tenure: {
        type: Number,
        required: true
    },
    discount:{
        type:Number
    },
    loanStartDate: {
        type: Date,
        required: true
    },
    loanEndDate: {
        type: Date,
        required: true
    },
    balanceAmount: {
        type: Number,
        required: true
    },
    installments: [installmentSchema],
    loanStatus: {
        type: String,
        required: true,
        default: 'pending',
        enum: ['pending', 'closed']
    },
    address:{
        type:String
    },
    reference:{
        type:String,
        default:"Self"
    }
    
});


module.exports = mongoose.model('MonthlyBorrower', monthlyborrowerSchema);