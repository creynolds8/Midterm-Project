const db = require('../connection');

const getUsers = () => {
  return db.query('SELECT * FROM users;')
    .then(data => {
      return data.rows;
    });
};

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

const account = {
  username: 'bobby!123',
  password: 'password1234',
  websiteName: 'amazon',
  websiteUrl: 'https://www.amazon.ca',
  organizationId: 2,
  categoryId: 12
};

addAccount(account);

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

organizationName(3);

module.exports = { getUsers, addAccount, organizationName};
