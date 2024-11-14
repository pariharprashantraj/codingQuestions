import { stringForCompression } from "./constant.js";

const compressHelper = (str) => {
  let compressedString = "";
  console.log(str);
  let i = 0;
  while (i < str.length) {
    console.log(i);
    let charCount = 1;

    while (str[i] === str[i + 1] && i < str.length) {
      console.log(i, str[i], compressedString);
      charCount++;
      i++;
    }
    compressedString += str[i] + charCount;
    i++;
  }
  return compressedString;
};

export const compressedString = () => {
  stringForCompression.map((str) =>
    console.log(str, ": ", compressHelper(str))
  );
};
