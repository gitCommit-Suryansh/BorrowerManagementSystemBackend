const mongoose = require('mongoose');

const installmentSchema = new mongoose.Schema({
    date: {
      type: Date,
    },
    demandedAmount: {
      type: Number,
    },
    receivedAmount: {
      type: Number,
    },
    paid: {
      type: Boolean,
    }
  });

const dailyborrowerSchema = mongoose.Schema({
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
    refundAmount: {
        type: Number,
        required: true
    },
    refundedAmount: {
        type: Number,
        default: 0
    },
    emiAmount: {
        type: Number,
        required: true
    },
    loanScheme: {
        type: String,
        required: true,
        enum: ['daily']
    },
    tenure: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
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
    }
    
});


module.exports = mongoose.model('DailyBorrower', dailyborrowerSchema);