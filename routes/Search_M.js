var express = require('express');
var router = express.Router();

const BL_Search_M = require('../BL/BL_Search_M');

router.get('/', function(req, res, next) {
  res.render('Search_M', {});
});


router.post('/getdata', async function(req, res, next) {

    let MoviesArr = await BL_Search_M.Search(req.body);

    if (req.session.statusUser == 1 && req.session.date != new Date().toDateString() || req.session.maxTransactions <= req.session.NumberTransactions)
    {
       res.redirect('/users');
    }
  
   req.session.NumberTransactions += 1

    res.render('Results_S' , {Movies : MoviesArr});
    
  });
  
module.exports = router;