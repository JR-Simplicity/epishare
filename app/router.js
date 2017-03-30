const mongoose = require('mongoose'); //connector dabase
const express = require('express'); //server http

const router = express();

var bodyParser = require('body-parser');

router.use(bodyParser.json()); // support json encoded bodies
router.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/*
router.get('/:username/:password', function(req, res){
    var username = req.params.username
    var password = req.params.password

    var Account = mongoose.model('Account');
    
    var account = new Account({
      username: username,
      password: password
    });
    //save in db
    account.save();

  res.send('hello world');
});
*/

router.post('/register', function (req, res) {
  
  var Account = mongoose.model('Account');

  var account = new Account({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password,
    password2: req.body.password2
  });
  //save in db
  account.save();
  console.log('account id: ', account._id)
  
  res.send({
    status: 200,
    user: account._id,
  });
  
})



console.log('node is running in port ', 3000);
router.listen(3000);