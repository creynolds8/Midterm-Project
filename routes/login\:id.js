
//this is the route Andy gave us so we don't have to
// worry about login (I havn't connected the routes yet)

// do this instead
app.get('/login/:id', (req, res) => {
  // using encrypted cookies
  req.session.user_id = req.params.id;

  // or using plain-text cookies
  res.cookie('user_id', req.params.id);

  // send the user somewhere
  res.redirect('/');
});

// we will need to install the session cookies.


// we can add this to routes we don't want them to accsess
//without being logged in.
const userId = req.session.userId;
if (!userId) {
  return res.send({ message: "not logged in" });
}

//Login route
app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const userEmail = findEmail(email, users);
  const userPassword = findPassword(email, users);
  if (email === userEmail) {
    if (bcrypt.compareSync(password, userPassword)) {
      const userID = findUserID(email, users);
      // Cookie for user ID
      req.session.user_id = userID;
      res.redirect("/urls");
    } else {
      res.status(403).send("Password is wrong");
    }
  } else {
    res.status(403).send("User email is invalid. Register");
  }
});

