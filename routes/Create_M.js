var express = require('express');
var router = express.Router();

const BL_Create_M = require('../BL/BL_Create_M');

router.get('/', function(req, res, next) {
  res.render('Create_M', {});
});


router.post('/getdata', async function(req, res, next) {

    let statusData = await BL_Create_M.AddMovie(req.body);

    console.log(statusData);
    
    if ( req.session.statusUser) {

     if (req.session.statusUser == 1 && req.session.date != new Date().toDateString() || req.session.maxTransactions <= req.session.NumberTransactions)
     {
         
        res.redirect('/users');
     }
        req.session.NumberTransactions += 1

        res.redirect('/Menu');
      
      }

      else {
        res.redirect('/users');
      }
    
  });
  
module.exports = router;