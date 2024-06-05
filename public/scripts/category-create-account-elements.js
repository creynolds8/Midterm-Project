$(document).ready(function() {

const copyText = function(textToCopy) {
  navigator.clipboard.writeText(textToCopy)
    .then(() => {
      console.log("Text copied to clipboard successfully!");
    })
    .catch(err => {
      console.error('Unable to copy text to clipboard: ', err);
    });
};


const createAccountElementCategory = function (account) {
  const newAccount = $(`
  <tr>
  <th>${account.website_name}</th>
  <th>${account.username}</th>
  <th><button onclick="copyText('${account.username}')" class="account-button">Copy username</button></th>
  <th>${account.password}</th>
  <th>    <button onclick="copyText('${account.password}')" class="account-button">Copy password</button></th>
  <th><button onclick="location.href='accounts/${account.id}';" class="account-button">Edit</button></th>
</tr>
  `);
  return newAccount;
};

const renderAccountsCategory = function(accounts) {
  for (const account of accounts) {
    console.log(account);
    const $account = createAccountElementCategory(account);
    $("#accounts").prepend($account);
  }
};





  const loadAccountsByCategory = function() {
    $.get({
      url: "http://localhost:8080/accounts/getcategoryaccounts/",
    }).then((res) => {
      $("#accounts").empty();
      renderAccountsCategory(res);
    });
  };

});
