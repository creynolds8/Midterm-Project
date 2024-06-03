
const express = require('express');
const router  = express.Router();
const cookieSession = require('cookie-session');


router.get('/:id', (req, res) => {
  req.session.userId = req.params.id;
  console.log("user id", req.session.userId);
  res.redirect('/accounts');
});


module.exports = router;



// // we can add this to routes we don't want them to accsess
// //without being logged in.
// const userId = req.session.userId;
// if (!userId) {
//   return res.send({ message: "not logged in" });
// }
