function isPalindrome(word) {
  let splitWord = word.split("")
  let reverseWordArray = splitWord.reverse()
  let joinArray = reverseWordArray.join("")
  return (joinArray === word ? true : false )
  
  
}

/* 
 declare a string called testString
 read the string right to left, and left to right. 
 if both reads are the same, return true. if not return false.
*/

/*
 function that has 1 argument(string). this function determines if that string is a palindrome by
 returning true of false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
