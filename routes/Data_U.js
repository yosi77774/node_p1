var express = require('express');
var router = express.Router();

const BL_Useers = require('../BL/BL_Useers');

/* GET home page. */
router.get('/', function(req, res, next) {
   
  res.render('Data_U', {});
});

router.post('/Add', async function(req, res, next) {

    let status = await BL_Useers.Add_User(req.body);

    console.log(status);

    res.redirect('/Management_U');
  });

  router.post('/update', async function(req, res, next) {

    let status = await BL_Useers.UpdateUser(req.body);

    console.log(status);

    res.redirect('/Management_U');
  });

module.exports = router;