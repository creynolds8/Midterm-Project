const {addAccount} = require('../db/database');
const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  const userId = req.session.userId;
  if (!userId) {
    return res.send({ message: "not logged in" });
  }
  res.render('create-account');
});

router.post('/', (req, res) => {
  const userId = req.session.userId;
  addAccount(req.body, userId)
    .then(() => {
      res.redirect('accounts');
    })
    .catch((error)=>{
      console.log(error);
    });
});


module.exports = router;
