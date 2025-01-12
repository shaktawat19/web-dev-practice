import { useRef } from "react";

function customMemo(cb, dependencyArray) {
  let ref = useRef({
    memoizedVal: undefined,
    lastDepArr: undefined,
  });

  if (
    !ref.current.memoizedVal ||
    !isArraysEql(ref.current.lastDepArr, dependencyArray)
  ) {
    ref.current.memoizedVal = cb();
    ref.current.lastDepArr = dependencyArray;
  }

  return ref.current.memoizedVal;
}

function isArraysEql(lastArr, currArr) {
  if (lastArr.length !== currArr.length) {
    return false;
  }

  for (let i = 0; i < currArr.length; i++) {
    if (lastArr[i] !== currArr[i]) return false;
  }

  return true;
}
