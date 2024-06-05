const express = require('express');
const router = express.Router();
const { allAccounts, getAccountById, updateAccount, getAccountsByCategory, deleteAccountById } = require('../db/database');

router.get('/getaccounts', (req, res) => {
  allAccounts(req.session.userId)
    .then((response) => {
      res.json(response);
    });
});

router.get('/getcategoryaccounts/:id', (req, res) => {
  const categoryId = req.params.id;
  console.log("category Id", categoryId);

  getAccountsByCategory(categoryId, req.session.userId)
    .then((response) => {
      res.json(response);
    })
    .catch((error) => {
      console.log(error);
    });

});

router.get('/', (req, res) => {
  const templateVars = {userId: req.session.userId, error: null, orgName: req.session.organizationName, userName: req.session.userName};
  res.render('accounts', templateVars);
});



router.get('/:id', (req, res) => {
  const accountId = req.params.id;
  getAccountById(accountId)
    .then((results) => {
      const templateVars = { account: results, userId: req.session.userId, orgName: req.session.organizationName, userName: req.session.userName };
      res.render('edit-account', templateVars);
    })

});
router.post('/:id/delete', (req, res) => {
  const account = req.body;
  console.log("account", account);
  deleteAccountById(account.accountId)
    .then(() => {
      res.redirect('/accounts');
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
