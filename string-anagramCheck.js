import { anagramList } from "./constant.js";

// using sorting and using built in function
// export const checkAnagramHelper = (str1, str2) => {
//   const normalize = (str) => str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
//   const sortedStr1 = normalize(str1).split("").sort().join("");
//   const sortedStr2 = normalize(str2).split("").sort().join("");
//   return sortedStr1 === sortedStr2;
// };
export const checkAnagramHelper = (str1, str2) => {
  const first = str1.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const second = str2.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const map = new Map();
  for (let char of first) {
    if (map.has(char)) map.set(char, (map.get(char) || 0) + 1);
  }
  for (let char of second) {
    if (map.has(char)) {
      const newCount = map.get(char) - 1;
      map.set(char, newCount);
    } else {
      return false;
    }
  }
  for (let [key, value] of map.entries()) {
    if (value !== 0) return false;
  }
  return true;
};

export const checkAnagram = () => {
  anagramList.map((item) =>
    console.log(
      item[0],
      " ",
      item[1],
      " is ",
      checkAnagramHelper(item[0], item[1]) ? "Anagram" : "Not Anagram"
    )
  );
};
