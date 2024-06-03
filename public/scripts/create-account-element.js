
const copyText = function (id) {
  const paragraph = document.getElementById(id);
  const textToCopy = paragraph.textContent;
  navigator.clipboard.writeText(textToCopy)
    .then(() => {
      console.log("Text copied to clipboard successfully!");
    })
    .catch(err => {
      console.error('Unable to copy text to clipboard: ', err);
    });
};

  const createAccountElement = function (account) {
    const newAccount = $(`
    <article>
    <p>${account.website_name}</p>
    <p id="${account.username}">${account.username}</p>
    <button onclick="copyText('${account.username}')" class="account-button">Copy username</button>
    <p id="${account.password}">${account.password}</p>
    <button onclick="copyText('${account.password}')" class="account-button">Copy password</button>
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
