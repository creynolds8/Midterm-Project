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
  console.log("accountId", accountId);
  getAccountById(accountId)
    .then((results) => {
      console.log("results", results);
      const categoryValue = results["category_id"]
      const templateVars = { account: results, userId: req.session.userId };
      console.log("template Vars", templateVars);
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
