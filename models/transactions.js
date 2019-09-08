var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var transactionSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    cuenta: String,
    cod_mov: Number,
    cd_trx: String,
    cd_ope: Number,
    cod_concep: String
});

module.exports = mongoose.model('Transactions', transactionSchema);