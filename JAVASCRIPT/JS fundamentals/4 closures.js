// function run() {
//   for (var i = 1; i < 5; i++) {
//     console.log("inner");
//     setTimeout(() => {
//       console.log(i);
//     }, 1000);
//   }
//   console.log("heyy");
// }
// run();


// function run(){
//     for(let i=1;i<5;i++){
//     setTimeout(() => {  // here, 4 fresh new i variable will be created as let is block scoped.
//         console.log(i);
//     }, 1000);
//     }
//     console.log('heyy');
// }
// run();


// function run(){
//     for(var i=1;i<5;i++){
//         function close(i){
//             setTimeout(() => {
//                 console.log('value of i:', i); // here, i will be printed different everytime due to closure i.e "i" passed to fn close will be different everytime.
//             }, 1000);
//         }
//         close(i);
//     }
//     console.log('heyy');
// }
// run();


// function outer() {
//     var x = 10;
//     function fn() { // fn refering to 'x' of parent lexical scope.
//         console.log(++x);
//     }
//     x = 100;
//     return fn;
// }
// let a = outer();
// a(); // output: 101
// var b = outer(); // on each call, a new fn call will be there
// b(); // Here also output: 101


// function Counter(){
//     var count = 0;
//     this.increment = function(){
//         count++;
//         console.log(count);
//     }
//     this.decrement = function(){
//         count--;
//         console.log(count);
//     }
// }
// var obj = new Counter(); // This is contructor
// obj.increment();

