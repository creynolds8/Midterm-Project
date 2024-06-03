const renderAccounts = function (accounts) {
  for (const account of accounts) {
    const $account = createAccountElement(account);
    $('.accounts').prepend($account);
  }
};
