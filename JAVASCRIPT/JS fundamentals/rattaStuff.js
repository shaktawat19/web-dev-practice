// Operator && has a higher precedence than ||

// console.log(null == undefined) // true
// console.log(null === undefined) // false
// console.log(null == 0) // false
// console.log(null < 0) // false
// console.log(null > 0) // false
// console.log(null <= 0) // true
// console.log(null >= 0) // true
// console.log(undefined == 0) // false
// console.log(undefined < 0) // false
// console.log(undefined > 0) // false
// console.log(undefined <= 0)  // false
// console.log(undefined >= 0)  // false
// console.log(typeof(null)) // object
// console.log(typeof(undefined)) // undefined


// 0 == false   // true
// 0 === false  // false
// 1 == "1"     // true
// 1 === "1"    // false
// '0' == false // true
// '0' === false // false
// []==[] or []===[] //false, refer different objects in memory
// {}=={} or {}==={} //false, refer different objects in memory


const obj = {
    a: this, // refers to global object
    b: function(){
      return this; // refers to obj object
    },
    c: () => {
      return this; // refers to global object
    },
    d(){
      return this; // refers to obj object
    }, 
    e: function(){
      return this.a;
    }
  }
  
console.log(obj.e());

// Javascript internals:
// console.log(1);
// setTimeout(()=>console.log(2), 0);
// Promise.resolve().then(()=>console.log(3));
// setTimeout(()=>console.log(4), 1);
// console.log(5)
// o/p: 1 5 3 2 4 



// postgresql://neondb_owner:qeyDfmN3xYU6@ep-empty-recipe-a71b2y8r.ap-southeast-2.aws.neon.tech/neondb?sslmode=require




