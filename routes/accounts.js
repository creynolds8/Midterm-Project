const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.render('accounts');
});

module.exports = router;
