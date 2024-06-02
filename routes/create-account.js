const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.render('create-account');
});

router.post('/', (req, res) => {
  console.log(req.body);
  //res.redirect('accounts');
});

module.exports = router;
