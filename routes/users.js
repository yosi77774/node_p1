var express = require('express');
var router = express.Router();

const BL_Useers = require('../BL/BL_Useers');

router.get('/', function(req, res, next) {
  res.render('Login', {msg : "Login"});
});

router.post('/getdata', async function(req, res, next) {

  let status = await BL_Useers.checkUser(req.body);

  console.log(status.status );

  console.log(req.session.NumberTransactions);

    req.session.statusUser = status.status;
    
    if(status.status == 1){

      if(req.session.date != new Date().toDateString()){

        req.session.date = new Date().toDateString();
        req.session.NumberTransactions = 0

      }

      req.session.maxTransactions = status.Transactions

     if(req.session.maxTransactions <= req.session.NumberTransactions){
       console.log("Error");
       res.render('Login',{msg :"It has reached the maximum number of transactions for this day"});
  
      }
      else{
        res.redirect('/Menu');
      }
  }

  else if(status.status == 2){
    req.session.statusUser = status.status;
    res.redirect('/Menu');
  }

  else {

    console.log("status 0");
    res.redirect('/users');

  }
  
});


module.exports = router;
