// load .env data into process.env
require('dotenv').config();

// Web server config
const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');
const cookieSession = require('cookie-session');

const PORT = process.env.PORT || 8080;
const app = express();

app.set('view engine', 'ejs');

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(
  '/styles',
  sassMiddleware({
    source: __dirname + '/styles',
    destination: __dirname + '/public/styles',
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static('public'));
app.use(cookieSession({
  name: 'session',
  keys: ["potato"],
  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const createAccountRoute = require('./routes/create-account');
const accountsRoute = require('./routes/accounts');
const loginRoutes = require('./routes/login');
const logoutRoutes = require('./routes/logout')
const { Template } = require('ejs');

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use('/createnewaccount', createAccountRoute);
app.use('/accounts', accountsRoute);
app.use('/login', loginRoutes);
app.use('/logout', logoutRoutes);
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get('/', (req, res) => {
  const templateVars = {userId: req.session.userId, error: null, orgName: req.session.organizationName, userName: req.session.userName };
  res.render('index', templateVars);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
