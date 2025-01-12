
let x = 'a', y = 2;
let students = {
     name:"harsh",
     age:"24",
     hobbies:["a",5],
     [x]: y,
     country: {
          India: "India",
          state: {
               Rajasthan: "Rajasthan"
          }
     }
}
const { age, name: myName, country: { state: { Rajasthan } },  ...restKeys } = students;
console.log(restKeys);
// delete students.name will delete the pair from object.

// var a = 5; 
// delete a; This won't work, as delete deletes only obj pair.




