// each fn in js has access to 'this' keyword.
let obj1 = {
    fName: "harsh",
    lName: "s.",
    printFullname: function (city, state){
        console.log(this.fName + " " + this.lName);
        console.log(city + " " + state);
    }
}
// obj1.printFullname();

let obj2 = {
    fName: "hh",
    lName: "ss",
}

// fn borrowing : take fn from one object n assign it in another object.

// call method:
// obj1.printFullname.call(obj2,'jaipur','Rajasthan'); // first argument is reference to 'this' keyword, and later one's are normal arguments to fn.
// console.log(obj2);

// // apply method:
// obj1.printFullname.apply(obj2,['jaipur','Rajasthan']); // diff. b/w call n apply: arguments in a array format.


// // bind method:
// let printMyName = obj1.printFullname.bind(obj2,'jaipur','Raj'); // Here copy of printFullname will be created and that will be bind with
                        // object obj2, and a method will be returned, that can be called later.
// printMyName();

// So, call n apply directly invoke fn, but bind returns a fn to call later.




// Q.1
// const animals = [
//     { species: "lion", name: "King" },
//     { species: "Whale", name: "Queen" },
// ];
// function printAnimals(){
//     this.print = function(){
//         console.log("#" + this.species + "" + this.name);
//     }
//     this.print();
//     console.log(this);
// }

// for (let i = 0; i < animals.length; i++) 
//     printAnimals.call(animals[i]);  

//Q.2 Append an array to another array
// const array = ["a", "b"];
// const elemnts = [0, 1, 2];

// array.push.apply(array, elemnts);
// console.log(array);

//Q.3 Using apply to enhance Built-in functions
// Find min/max in array
// const elements = [0, 1, 2, 20, 45, 5, 56];
// console.log(Math.max(...elements));
// or
// console.log(Math.max.apply(null, elements));

//Q.4 Bound fn
// function fn() {
//     console.log(this);
// }
// let user = {
//     g: fn.bind(null)
// };
// user.g();

// Q5 Bind Chaining
// function fn() {
//     console.log(this);
// }
// fn = fn.bind({name: 'Harsh'}).bind({name: "hey"});
// fn();   // prints harsh, as fn can't be rebound.