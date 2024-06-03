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
    res.render('accounts');
});

router.get('/:id', (req, res) => {
  res.render('edit-account');
});

module.exports = router;
