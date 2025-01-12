let obj1 = {
    name: "Harsh",
    age: 25,
    address:{
         state: "Rajasthan",
         city: "Chittaurgarh"
    }
}

// SHALLOW COPY: For primitive values only, refrence wont b shared to newly created copy. 
    //           // But for non-primtives,  references will be shared.
    // let arr1 = [20, 200];
    // let arr2 = arr1;
    // arr2[1] = 1000;
    // console.log(arr1);

// we can use spread operator or Object.assign({}, obj), for converting shallow copy to deep copy.
// But for nested objects, above two ways won't work. Ex:
    // let xx = {...obj1}
    // xx.age = 60;
    // xx.address.city = "Bangalore"; 
    // console.log(xx);
    // console.log(obj1);

// So we will use the below method:
//DEEP COPY:
    // let resObj = JSON.parse(JSON.stringify(obj1));
    // resObj.address.city = "Mumbai";
    // console.log(obj1);



// Question 4:
// function question4(){
//     const testObject1 = {
//         sampleDate: new Date(),
//     };
//     const testObject2 = JSON.parse(JSON.stringify(testObject1));
//     console.log(testObject1);   // gives object
//     console.log(testObject2);  // gives string, so deep copy cnt be done through above approach
// }
// question4();

// Question 5: 
// function question5(){
//     const testObject1 = {
//         sampleFunction: console.log,
//         sampleUndefined: undefined
//     };
//     const testObject2 = JSON.parse(JSON.stringify(testObject1));
//     console.log(testObject1);
//     console.log(testObject2);
// }
// question5();

// // Question 6
// function question6(){
//     const testObject1 = {
//         // sampleFunction: question2,
//         sampleInfinity: -Infinity,
//         sampleNaN: NaN,
//     };
//     const testObject2 = testObject1;
//     console.log(testObject1);
//     console.log(testObject2);
// }
// question6();

// KEY POINTS : Do not use json.stringify approach for deep copy in case of:
//  1. fns/undefined  as value in object.
//  2. Date() as value in object
//  3. NaN/-Infinity as value in object

// To make above work :
// 1. use libraries like lodash
// 2. copying values one after another