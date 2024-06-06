
const copyText = function (textToCopy) {
  navigator.clipboard.writeText(textToCopy)
    .then(() => {
      console.log("Text copied to clipboard successfully!");
    })
    .catch(err => {
      console.error('Unable to copy text to clipboard: ', err);
    });
};

const createAccountElement = function(account) {
  const newAccount = $(`

    <tr>
    <th class="logo">
    <img src="https://logo.clearbit.com/${account.website_url}?size=50">
    <p>${account.website_name}</p>
    </th>
    <th>${account.username}</th>
    <th><button onclick="copyText('${account.username}')" class="account-button">Copy username</button></th>
    <th>${account.password}</th>
    <th>    <button onclick="copyText('${account.password}')" class="account-button">Copy password</button></th>
    <th><button onclick="location.href='accounts/${account.id}';" class="account-button">Edit</button></th>
  </tr>
    `);
  return newAccount;
};

const renderAccounts = function (accounts) {
  for (const account of accounts) {
    const $account = createAccountElement(account);
    $("#accounts").prepend($account);
  }
};

const loadAccounts = function () {
  $.get({
    url: "http://localhost:8080/accounts/getaccounts",
  }).then((res) => {
    $("#accounts").empty();
    $('.table-title').text("Accounts");
    renderAccounts(res);
  });
};

$(document).ready(function () {
  loadAccounts()
})



