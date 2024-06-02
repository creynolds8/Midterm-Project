
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
