import { parenthesesList } from "./constant.js";

export const validParentheses = () => {
  const checkValidParentheses = (str) => {
    const parentheses = str.replace(/[^()\[\]{}]/g, "");
    let stackArray = [];
    if (!parentheses.length) return false;
    for (let i = 0; i < parentheses.length; i++) {
      const char = parentheses[i];
      if (char === "(" || char === "{" || char === "[") {
        stackArray.push(char);
      } else {
        let lastParentheses = stackArray.pop();
        if (
          (char === ")" && lastParentheses !== "(") ||
          (char === "}" && lastParentheses !== "{") ||
          (char === "]" && lastParentheses !== "[")
        )
          return false;
      }
    }
    return stackArray.length === 0;
  };

  parenthesesList.map((parentheses) => {
    console.log(
      "Parenthese : ",
      parentheses,
      checkValidParentheses(parentheses) ? " is Valid" : " is not Valid"
    );
  });
};
