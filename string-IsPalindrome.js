import { palindromes } from "./constant.js";

const cleanString = (str) => {
  // Regular Expression Breakdown
  // / ... /: This syntax indicates the start and end of a regular expression in JavaScript.
  // [^ ... ]:
  // The ^ inside square brackets ([ ... ]) means "not."
  // [a-zA-Z0-9] represents a character set that includes:
  // a-z: All lowercase letters.
  // A-Z: All uppercase letters.
  // 0-9: All digits.
  // Combined, [^a-zA-Z0-9] means "any character that is not a letter (a-z or A-Z) or a number (0-9)."
  // g flag: The g after the regular expression stands for "global." It tells JavaScript to search for
  // all instances of the pattern in the string, rather than stopping after the first match.
  return str.replace(/[^a-zA-Z0-9]/g, "");
};

const isPalindrome = (str) => {
  const cleanStr = cleanString(str);
  const reversedStr = cleanStr.split("").reverse().join("");
  return cleanStr.toLowerCase() === reversedStr.toLowerCase();
};

const isPalindromeWithoutBuiltFunction = (str) => {
  const cleanStr = cleanString(str).toLowerCase();
  let left = 0;
  let right = cleanStr.length - 1;
  while (left < right) {
    if (cleanStr[left] !== cleanStr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

const isPalindromeRecursion = (str) => {
  const cleanStr = cleanString(str).toLowerCase();
  const helper = (left, right) => {
    if (left >= right) return true;
    if (cleanStr[left] !== cleanStr[right]) return false;
    return helper(left + 1, right - 1);
  };
  return helper(0, cleanStr.length - 1);
};

export const checkisArrayPalindrome = (arr = palindromes) => {
  arr.map((str) =>
    console.log(
      str,
      " - ",
      cleanString(str),
      ": is ",
      //   isPalindrome(str) ? "Palindrom" : "Not Palindrome"
      //   isPalindromeWithoutBuiltFunction(str) ? "Palindrom" : "Not Palindrome"
      isPalindromeRecursion(str) ? "Palindrom" : "Not Palindrome"
    )
  );
};
