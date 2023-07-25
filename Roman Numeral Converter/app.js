function convertToRoman(num) {
  // Object mapping Roman numeral letters to their corresponding decimal values
  let romanToNum = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

  // Initialize an empty string to store the Roman numeral representation
  let roman = "";

  // Iterate through each key (Roman numeral) in the romanToNum object
  for (let key in romanToNum) {
    // While the given number is greater than or equal to the decimal value represented by the Roman numeral
    while (num >= romanToNum[key]) {
      // Add the Roman numeral to the result string
      roman += key;
      // Subtract the decimal value from the given number
      num -= romanToNum[key];
    }
  }

  // Return the Roman numeral representation
  return roman;
}

console.log(convertToRoman(12));
