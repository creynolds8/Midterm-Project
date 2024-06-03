const  { allAccounts } = require('../../db/database.js')

const createAccountElement = function (account) {
  const newAccount = $(`
  <article>
  <p>${account.website_name}</p>
  <p>${account.username}</p>
  <button class="account-button">Copy username</button>
  <p>${account.password}</p>
  <button class="account-button">Copy password</button>
  <button class="account-button">Edit</button>
  </article>
  `);
  return newAccount;
};

const renderAccounts = function (accounts) {
  for (const account of accounts) {
    const $account = createAccountElement(account);
    $(".accounts").prepend($account);
  }
};

const loadAccounts = function (usedId) {
  allAccounts(userId)
}

module.exports = { createAccountElement, renderAccounts };
