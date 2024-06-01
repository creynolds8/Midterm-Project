//randompassword.js

//Function that Returns random password based on length input
// const length = 8;
// const generatePassword = function (length, lower, upper, special, number) {

//   const lowerCase = "abcdefhijklmnopqrstuvwxyz"
//   const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//   const specialChar = "!@#$%^*()_+="
//   const num = "1234567890"


//   if (lower === true) {
//     const char = "";
//     for (let i = 0; i < length; i++) {
//       char = char + Math.random(lowerCase);
//     }
//     return password;
//   }

//   if (upper === true) {
//     const char = "";
//     for (let i = 0; i < length; i++) {
//       char = char + Math.random(upperCase);
//     }
//     return password;
//   }

//   if (special === true) {
//     const char = "";
//     for (let i = 0; i < length; i++) {
//       char = char + Math.random(special);
//     }
//     return password;
//   }

//   if (number === true) {
//     const char = "";
//     for (let i = 0; i < length; i++) {
//       char = char + Math.random(number);
//     }
//     return password;
//   }

// }
// console.log(generatePassword(length, true, false, false, false));

const generatePassword = function (length, lower, upper, special, number) {
  const lowerCase = "abcdefhijklmnopqrstuvwxyz";
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

const length = 8;
console.log(generatePassword(length, true, true, true, true));
