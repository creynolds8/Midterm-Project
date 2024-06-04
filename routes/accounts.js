const express = require('express');
const router = express.Router();
const { allAccounts, getAccountById, updateAccount } = require('../db/database');

router.get('/getaccounts', (req, res) => {
  allAccounts(req.session.userId)
    .then((response) => {
      res.json(response);
    });
});

router.get('/', (req, res) => {
  res.render('accounts');
});



router.get('/:id', (req, res) => {
  const accountId = req.params.id;
  getAccountById(accountId)
    .then((results) => {
      const templateVars = { account: results, userId: req.session.userId };
      res.render('edit-account', templateVars);
    })
    .catch((error) => {
      console.log(error);
    });

});

router.post('/:id', (req, res) => {
  const account = req.body;
  console.log("account", account);
  updateAccount(account)
    .then(() => {
      res.redirect('/accounts');
    })
    .catch((error) => {
      console.log(error);
    });
});


module.exports = router;
