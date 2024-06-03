const express = require('express');
const { loadAccounts, renderAccounts } = require('../public/scripts/create-account-element');
const { allAccounts } = require('../db/database');
const router  = express.Router();

router.get('/', (req, res) => {
  console.log('in accounts route');
  allAccounts(req.session.userId)
  .then((res) => {
    renderAccounts(res)
  })
  res.render('accounts');
});

module.exports = router;
