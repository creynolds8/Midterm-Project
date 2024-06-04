
const express = require('express');
const { organizationName, getUserName} = require('../db/database');
const router  = express.Router();



router.get('/:id', (req, res) => {
  req.session.userId = req.params.id;
  console.log("user id", req.session.userId);
  organizationName(req.session.userId)
    .then((orgName) => {
      req.session.organizationName = orgName["organization_name"];
      console.log("cookie orgName: ", req.session.organizationName);
      return getUserName(req.session.userId);
    })
    .then((userName) => {
      req.session.userName = userName.name;
      console.log("cookie userName: ", req.session.userName);
      res.redirect('/accounts');
    })
    .catch((err) => {
      console.log(err.message);
    });
});

module.exports = router;



// // we can add this to routes we don't want them to accsess
// //without being logged in.
// const userId = req.session.userId;
// if (!userId) {
//   return res.send({ message: "not logged in" });
// }
