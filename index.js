var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var methodOverride = require('method-override');
var app = express();

mongoose.connect('mongodb://localhost/hackbbva', { useNewUrlParser: true }, function(err, res) {
    if (err) throw err;
    console.log('Connected to Database');
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());


var transactionCtrl = require('./models/transactions')(mongoose);

var TransactionCtrl = require('./controllers/transactions');

var router = express.Router();

router.get('/', function(req, res) {
    res.send("Server is listening to you!");
});
app.use(router);

var api = express.Router();

api.route('/transactions')
    .get(TransactionCtrl.findAll)
    .post(TransactionCtrl.add);


app.use('/hackbbva', api);

app.listen(3000, function() {
    console.log("Node server running on http://localhost:3000");
});