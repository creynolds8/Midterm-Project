const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.render('accounts');
});

router.get('/:id', (req, res) => {
  res.render('edit-account');
});

module.exports = router;
