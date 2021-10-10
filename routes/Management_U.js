var express = require('express');
var router = express.Router();

const BL_Useers = require('../BL/BL_Useers');

router.get('/',async function(req, res, next) {

    let Users = await BL_Useers.Getusers();

  res.render('Management_U', {Users : Users});
});

router.get('/:Users', async function(req, res, next) {

    let UsersData =req.params.Users;

    if(UsersData>0){
       
        let status = await BL_Useers.delete_User(UsersData);

        console.log(status); 

        res.render('Management_U',{});
    }

    else
    {
    var UsersData2 = JSON.parse(UsersData);
  
    res.render('Data_U' , {Users : UsersData2});
}
  });

  
module.exports = router;