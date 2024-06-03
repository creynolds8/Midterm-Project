// const { allAccounts } = require("../../db/database.js");

  const createAccountElement = function (account) {
    const newAccount = $(`
    <article>
    <p>${account.website_name}</p>
    <p id="username">${account.username}</p>
    <button class="account-button">Copy username</button>
    <p id="password">${account.password}</p>
    <button class="account-button">Copy password</button>
    <button class="account-button">Edit</button>
    </article>
    `);
    return newAccount;
  };

  const renderAccounts = function (accounts) {
    for (const account of accounts) {
      console.log(account);
      // const $account = createAccountElement(account);
      // $(".accounts").prepend($account);
    }
  };

  module.exports = { createAccountElement, renderAccounts };

// document.addEventListener('DOMContentLoaded', function() {

//   renderAccounts([{website_name: 'blank', username: 'asdfa', password:'aasdf'}])
//   })
