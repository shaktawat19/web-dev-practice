function* genNums() {
  let i = 0;

  while (1) yield i++;
}
let genObj = genNums();
// console.log(genObj.next().value);



