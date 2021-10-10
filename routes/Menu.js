var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

    if (req.session.statusUser == 1 && req.session.date == new Date().toDateString()) {
        res.render('Menu',{});
      }
    
      else if (req.session.statusUser==2) {
          res.render('Menu_A', {});
        }
      

      else {
        res.redirect('/users');
      }

});

module.exports = router;