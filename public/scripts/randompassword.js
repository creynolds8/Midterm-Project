const generatePassword = function (length, lower, upper, special, number) {
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const specialChar = "!@#$%^*()_+=";
  const num = "1234567890";
  let password = "";
  //concatenate string based on condition
  const characters = (lower ? lowerCase : "") + (upper ? upperCase : "") + (special ? specialChar : "") + (number ? num : "");
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

module.exports = { generatePassword };
