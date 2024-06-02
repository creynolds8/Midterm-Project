const {addAccount} = require('../db/database');
const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.render('create-account');
});

router.post('/', (req, res) => {
//once we get the login route working we need to
//get the id from cookies not hard coded!!!
  addAccount(req.body, 1)
    .then(() => {
      res.redirect('accounts');
    })
    .catch((error)=>{
      console.log(error);
    });
});


module.exports = router;
