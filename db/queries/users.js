const db = require('../connection');

const getUsers = () => {
  return db.query('SELECT * FROM users;')
    .then(data => {
      return data.rows;
    });
};

//// fix the org id issue
// takes in the information from the create account form as an object and updates db
const addAccount = function(account) {
  const queryStr = `INSERT INTO accounts (
    username, password, website_name, website_url, organization_id, category_id)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
    `;
  const queryArgs = [account.username, account.password, account.websiteName, account.websiteUrl, account.organizationId, account.categoryId];
  return db.query(queryStr, queryArgs)
    .then((results) => {
      return results.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};


const organizationName = function(userId) {
  const queryStr = `
  SELECT organizations.name AS organization_name
  FROM users
  JOIN organizations ON organizations.id = organization_id
  WHERE users.id = $1;
    `;
  const queryArgs = [userId];
  return db.query(queryStr, queryArgs)
    .then((results) => {
      return results.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });

};


const organizationId = function(userId) {
  const queryStr = `
  SELECT organization_id
  FROM users
  WHERE users.id = $1;
    `;
  const queryArgs = [userId];
  return db.query(queryStr, queryArgs)
    .then((results) => {
      console.log("org id", results.rows);
      return results.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};



// takes in the information from the update account form as an object and updates db
const updateAccount = function(account, accountId) {
  const queryStr = `
  UPDATE accounts
  SET username = $1,
  password = $2,
  website_name = $3,
  website_url = $4,
  category_id = $5
  WHERE id = $6;
    `;
  const queryArgs = [account.username, account.password, account.websiteName, account.websiteUrl, account.categoryId, accountId];
  return db.query(queryStr, queryArgs)
    .then((results) => {
      console.log(results.rows);
      return results.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};






module.exports = { getUsers, addAccount, organizationName, organizationId, updateAccount};


const account = {
  username: 'Ally123',
  password: 'Password!',
  websiteName: 'amazon',
  websiteUrl: 'https://www.amazon.ca',
  categoryId: 12
};

updateAccount(account, 1);




