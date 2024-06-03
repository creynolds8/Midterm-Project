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
      const $account = createAccountElement(account);
      $("#accounts").prepend($account);
    }
  };

  const loadAccounts = function() {
    $.get({
      url: "http://localhost:8080/accounts/getaccounts",
    }).then((res) => {
      $("#accounts").empty();
      renderAccounts(res);
    });
  };

  $(document).ready(function () {
    loadAccounts()
})
