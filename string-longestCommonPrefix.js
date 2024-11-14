import { words } from "./constant.js";

export const longestCommonPrefixString = () => {
  if (!words || words.length === 0) return "";
  let prefix = "";

  let shortestWord = words.reduce((shortest, current) =>
    shortest.length > current.length ? current : shortest
  );

  for (let x = 0; x < shortestWord.length; x++) {
    const char = shortestWord[x];
    if (words.every((word) => word[x] === char)) {
      prefix += char;
    } else {
      break;
    }
  }
  console.log("In an Array ", words, "common Prefix is: ", prefix);
};
