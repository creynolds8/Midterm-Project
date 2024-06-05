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

const renderAccountsCategory = function (accounts) {
  for (const account of accounts) {
    const $account = createAccountElementCategory(account);
    $("#accounts").prepend($account);
  }
};

const loadAccountsByCategory = function (id) {
  $.get({
    url: `http://localhost:8080/accounts/getcategoryaccounts/${id}`,
  }).then((res) => {
    $("#accounts").empty();
    $('.table-title').text(`Accounts: ${res[0].categoryname}`);
    renderAccountsCategory(res);
  });
};

$(document).ready(function () {
  loadAccountsByCategory(id);
});
