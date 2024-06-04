const express = require('express');
const router  = express.Router();
const { allAccounts } = require('../db/database');

router.get('/getaccounts', (req, res) => {
  allAccounts(req.session.userId)
  .then((response) => {
    res.json(response);
  })
});

router.get('/', (req, res) => {
  const templateVars = {userId: req.session.userId, error: null}
  res.render('accounts', templateVars);
});

module.exports = router;
