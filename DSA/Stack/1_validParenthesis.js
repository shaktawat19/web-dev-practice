//Q. Given a string, check if it is valid.
// Ex: "()", "{}", "[]", "{})"

// TC- O(n) | SC- O(n)
// logic: if openingBrct comes then push, else pop n compare with closingBrct.
function isValid(str) {
  function isPair(closingBracket, popedElem) {
    if (
      (closingBracket === ")" && popedElem !== "(") ||
      (closingBracket === "}" && popedElem !== "{") ||
      (closingBracket === "]" && popedElem !== "[")
    )
      return false;
    else return true;
  }

  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
      stack.push(str[i]);
    } else if (str[i] === ")" || str[i] === "}" || str[i] === "]") {
      if (stack.length === 0) return false; // means closing brackets came first
      let popedElem = stack.pop();
      if (!isPair(str[i], popedElem)) return false;
    }
  }

  if (stack.length === 0) return true;
  else return false;
}
console.log(isValid("((){})["));
