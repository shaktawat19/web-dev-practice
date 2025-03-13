const obj = {
  name: "Harsh",
  address: {
    country: {
      val: "India",
    },
    local: "Hmm",
  },
  state: {
    city: {
      val: "Chittaurgarh",
    },
    val: "Raj",
  },
};

let resultObj = {};

function flat(obj, passedKey = "") {
  Object.entries(obj).forEach(([key, value]) => {
    let k = passedKey ? `${passedKey}.${key}` : key;
    if (typeof value === "object") {
      flat(value, k);
    } else {
      resultObj[k] = value;
    }
  });
}
flat(obj);
console.log(resultObj);
