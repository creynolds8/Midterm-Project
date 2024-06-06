const {addAccount} = require('../db/database');
const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  const userId = req.session.userId;
  if (!userId) {
    res.redirect('/');
    return;
  }
  const templateVars = { userId: req.session.userId, error: null, orgName: req.session.organizationName, userName: req.session.userName };
  res.render('create-account', templateVars);
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
