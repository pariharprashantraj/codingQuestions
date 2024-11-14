export const palindromes = [
  "kayak",
  "deified",
  "rotator",
  "repaper",
  "deed",
  "peep",
  "wow",
  "noon",
  "civic",
  "racecar",
  "level",
  "mom",
  "bird rib",
  "taco cat",
  "UFO tofu",
  "Borrow or rob?",
  "Never odd or even.",
  "We panic in a pew.",
  "Won’t lovers revolt now?",
  "Ma is a nun, as I am.",
  "Don’t nod.",
  "Sir, I demand, I am a maid named Iris.",
  "Was it a car or a cat I saw?",
  "Yo, Banana Boy!",
  "Eva, can I see bees in a cave?",
  "Madam, in Eden, I’m Adam.",
  "A man, a plan, a canal, Panama!",
  "Never a foot too far, even.",
  "Red roses run no risk, sir, on Nurse’s order.",
  "He lived as a devil, eh?",
  "Ned, I am a maiden.",
  "Now, sir, a war is won!",
  "Evade me, Dave!",
  "Dennis and Edna sinned.",
  "Step on no petss!",
];

export const palindromeSubStringArray = [
  "banana",
  "civiccar",
  "forgeeksskeegfor",
  "noonracecar",
  "abracadabra",
];

export const stringForCompression = [
  "aaabbbbcccccdddddd",
  "ppppppppppppqqqrrr",
  "abcdeeeeeeefffffggg",
  "zzzzzzzzyyyyyxxxxxxww",
  "abcdefgh",
  "aabcccccaaa",
  "aaabb",
  "ccccaaa",
  "aabbcc",
  "a",
  "bb",
];

export const words = ["flower", "flow", "flight", "fl"];

export const parenthesesList = [
  // Valid Parentheses
  "()", // Simple valid pair
  "()[]{}", // Multiple types of valid pairs
  "{[()()]}", // Nested valid parentheses
  "([])", // Another valid mixed pair with nested parentheses
  "{([])}", // Valid parentheses with nested structures

  // Edge Cases
  "", // Empty string (edge case)
  "()", // Single valid pair
  "[]", // Another single valid pair
  "{}", // Another single valid pair
  "([{}])", // Valid mixed parentheses

  // Invalid Parentheses
  "(}", // Invalid pair (mismatched types)
  "([)]", // Invalid pair (order mismatch)
  "(", // Incomplete pair (missing closing parenthesis)
  ")", // Incomplete pair (missing opening parenthesis)
  "((()", // Unbalanced opening parentheses
  "([", // Unbalanced mixed opening parentheses
  "([{}]", // Unbalanced parentheses with mismatched types
  "abc", // Non-parenthesis characters (invalid input)
  "({[a+b]})", // Invalid due to non-parenthesis characters in between

  // Large input test case (edge case with a large number of parentheses)
  "(".repeat(1000) + ")".repeat(1000), // Valid large input with matching parentheses
  "(".repeat(1000) + ")", // Invalid large input with extra opening parentheses
  "(()(()))".repeat(100), // Valid large input with repeating valid pattern
  "(()(()))".repeat(1000), // Another large valid case
  "([{}])".repeat(1000), // Large valid mixed parentheses
];

export const anagramList = [
  // Basic cases
  ["listen", "silent"], // Anagram
  ["triangle", "integral"], // Anagram
  ["apple", "pale"], // Not anagram (different lengths)

  // Cases with spaces and different casing
  ["Dormitory", "Dirty room"], // Anagram (ignoring spaces and case)
  ["Conversation", "Voices rant on"], // Anagram (ignoring spaces and case)
  ["School master", "The classroom"], // Anagram (ignoring spaces and case)
  ["Astronomer", "Moon starer"], // Anagram (ignoring spaces and case)

  // Edge cases
  ["", ""], // Anagram (two empty strings)
  ["a", "a"], // Anagram (single-character match)
  ["a", "b"], // Not anagram (different single characters)
  ["", "nonempty"], // Not anagram (one empty, one non-empty)
  ["a".repeat(1000), "a".repeat(1000)], // Large identical strings (anagram)
  ["a".repeat(1000), "a".repeat(999) + "b"], // Large strings differing by one character (not anagram)

  // Cases with numbers and special characters
  ["123", "321"], // Anagram (numbers as characters)
  ["Hello!", "!oLleH"], // Anagram (including punctuation)
  ["Tom Marvolo Riddle", "I am Lord Voldemort"], // Famous anagram (ignoring spaces and case)
];
