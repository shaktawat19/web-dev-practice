let sentence = "hi there its me";
let stack = [];

let splittedArr = sentence.split(" ");

for (let elem of splittedArr) {
  stack.push(elem);
}

let finalSentence = "";
while (stack.length) {
  let elem = stack.pop();
  finalSentence += " " + elem;
}

console.log(finalSentence.trim());
