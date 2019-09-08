var mongoose = require('mongoose');
var Transaction = mongoose.model('Transactions');


exports.findAll = (req, res) => {

    Transaction.find((err, transaction) => {
        if (err)
            res.status(500).send(err.message);

        console.log('GET/Transactions');
        res.status(200).jsonp(transaction);
    });
}


exports.add = (req, res) => {
    console.log('POST/Transactions');
    var transaction = new Transaction({
        date: req.body.date,
        cuenta: req.body.cuenta,
        cod_mov: req.body.cod_mov,
        cd_trx: req.body.cd_trx,
        cd_ope: req.body.cd_ope,
        cod_concep: req.body.cod_concep
    });
    console.log('datos:', transaction);
    transaction.save((err) => {
        if (err)
            return res.status(500).send(err.message);
        res.status(200).json(transaction);
    });
}