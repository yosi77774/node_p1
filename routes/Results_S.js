const { json } = require('express');
var express = require('express');
var router = express.Router();

//const BL_Search_M = require('../BL/BL_Search_M');

router.get('/', function(req, res, next) {
  res.render('Results_S', {});
  
});
/*
router.get('/:obj', async function(req, res, next) {

    let Data =req.params.obj;
    console.log("img-------------------------------------------------");
   var Data2 = JSON.parse(Data);

   if (req.session.statusUser == 1 && req.session.date != new Date().toDateString() || req.session.maxTransactions <= req.session.NumberTransactions)
   {
      res.redirect('/users');
   }
    
   req.session.NumberTransactions += 1

   console.log("----------img-------------"+Data2.image);
  
    res.render('Data_M' , {Data : Data2});
  });*/

  router.post('/getdata', async function(req, res, next) {

    let obg = req.body.custId;
    var Data2 = JSON.parse(obg);

    if (req.session.statusUser == 1 && req.session.date != new Date().toDateString() || req.session.maxTransactions <= req.session.NumberTransactions)
    {
       res.redirect('/users');
    }
     
    req.session.NumberTransactions += 1
 
     res.render('Data_M' , {Data : Data2});


   });

   

    
  
  

  
  

module.exports = router;