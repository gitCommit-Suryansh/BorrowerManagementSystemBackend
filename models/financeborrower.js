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
    }
  });


const financeBorrowerSchema = mongoose.Schema({
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
    refundAmount: {
        type: Number,
        required: true
    },
    refundedAmount:{
        type:Number,
        default:0
    },
    loanScheme: {
        type: String,
        required: true,
        enum: ['finance']
    },
    tenure: {
        type: Number,
        required: true
    },
    discount:{
        type:Number
    },
    emiAmount:{
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
        required: true,
        min: 0
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
    }
    
});


module.exports = mongoose.model('FinanceBorrower', financeBorrowerSchema);