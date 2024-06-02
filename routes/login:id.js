
const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  req.session.userId = req.params.id;
  res.redirect('/accounts');
});


// login/:id

// router.get('/', (req, res) => {
//   res.render('accounts');
// });


// // we can add this to routes we don't want them to accsess
// //without being logged in.
// const userId = req.session.userId;
// if (!userId) {
//   return res.send({ message: "not logged in" });
// }
