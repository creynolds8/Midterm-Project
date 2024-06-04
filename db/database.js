const db = require('./connection');

const getUserName = (userId) => {
  const queryStr = 'SELECT name FROM users WHERE id = $1;';
  const queryArgs = [userId];
  return db.query(queryStr, queryArgs)
    .then(data => {
      return data.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};


// takes in the information from the create account form as an object and updates db
const addAccount = function(account, userId) {
  const queryStr = `INSERT INTO accounts (
    username, password, website_name, category_id, organization_id)
    VALUES ($1, $2, $3, $4, (SELECT organization_id
      FROM users
      WHERE users.id = $5))
    RETURNING *;
    `;
  const queryArgs = [account["username-input"], account["password-input"], account["website-input"], account["category-selection"], userId,];
  return db.query(queryStr, queryArgs)
    .then((results) => {
      return results.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};


//stretch version that takes a url
// // takes in the information from the create account form as an object and updates db
// const addAccount = function(account, organizationId) {
//   const queryStr = `INSERT INTO accounts (
//     username, password, website_name, website_url, organization_id, category_id)
//     VALUES ($1, $2, $3, $4, $5, $6)
//     RETURNING *;
//     `;
//   const queryArgs = [account.username, account.password, account.websiteName, account.websiteUrl, organizationId, account.categoryId];
//   return db.query(queryStr, queryArgs)
//     .then((results) => {
//       return results.rows;
//     })
//     .catch((err) => {
//       console.log(err.message);
//     });
// };



const deleteAccountById = function(accountId) {
  const queryStr = `
  DELETE FROM accounts WHERE accounts.id = $1;
    `;
  const queryArgs = [accountId];
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
      return results.rows[0];
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
      return results.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

// takes in the information from the update account form as an object and updates db
const updateAccount = function(account) {
  const queryStr = `
  UPDATE accounts
  SET username = $1,
  password = $2,
  website_name = $3,
  category_id = $4
  WHERE id = $5::INTEGER;
    `;
  const queryArgs = [account["username-input"], account["password-input"], account["website-input"], account["category-selection"], account.accountId];
  return db.query(queryStr, queryArgs)
    .then((results) => {
      return results.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

// stretch version
// // takes in the information from the update account form as an object and updates db
// const updateAccount = function(account, accountId) {
//   const queryStr = `
//   UPDATE accounts
//   SET username = $1,
//   password = $2,
//   website_name = $3,
//   website_url = $4,
//   category_id = $5
//   WHERE id = $6;
//     `;
//   const queryArgs = [account.username, account.password, account.websiteName, account.websiteUrl, account.categoryId, accountId];
//   return db.query(queryStr, queryArgs)
//     .then((results) => {
//       return results.rows;
//     })
//     .catch((err) => {
//       console.log(err.message);
//     });
// };


const getAllCategories = function() {
  const queryStr = `
  SELECT DISTINCT name
  FROM categories
    `;
  return db.query(queryStr)
    .then((results) => {
      return results.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

//get all category names which have an account associated with it
const getCategoriesByOrg = function(userId) {
  const queryStr = `
  SELECT DISTINCT categories.name
  FROM accounts
  JOIN categories ON categories.id = category_id
  JOIN organizations ON category_id = categories.id
  JOIN users ON organizations.id = users.organization_id
  WHERE users.organization_id =(SELECT organization_id
    FROM users
    WHERE users.id = $1);
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

const allAccounts = function(userId) {
  const queryStr = `
  SELECT * FROM accounts
  WHERE organization_id = (SELECT organization_id
  FROM users
  WHERE users.id = $1);
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

const getAccountById = function(accountId) {
  const queryStr = `
  SELECT * FROM accounts
  WHERE id = $1;
    `;
  const queryArgs = [accountId];
  return db.query(queryStr, queryArgs)
    .then((results) => {
      return results.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const getAccountsByCategory = function(categoryId, userId) {
  const queryStr = `
  SELECT DISTINCT accounts.*
  FROM accounts
  JOIN categories ON categories.id = category_id
  JOIN organizations ON organization_id = organization_id
  JOIN users ON organizations.id = users.organization_id
  WHERE categories.id = $1 AND accounts.organization_id = (SELECT organization_id
    FROM users
    WHERE users.id = $2);
    `;
  const queryArgs = [categoryId, userId];
  return db.query(queryStr, queryArgs)
    .then((results) => {
      return results.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};


module.exports = { getUserName, addAccount, deleteAccountById, organizationName, organizationId, updateAccount, getCategoriesByOrg, getAllCategories, allAccounts, getAccountById, getAccountsByCategory};


// const account = {
//   username: 'billybob',
//   password: 'popcorn',
//   websiteName: 'amazon',
//   websiteUrl: 'https://www.amazon.ca',
//   categoryId: 12
// };

// updateAccount(account, 1);
// addAccount(account, 2);
//getCategories(2);




