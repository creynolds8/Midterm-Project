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
  const queryArgs = [account.username, account.password, account.website_name, account.website_url, account.organization_id, account.category_id];
  return db.query(queryStr, queryArgs)
    .then((results) => {
      return results.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};



module.exports = { getUsers };
