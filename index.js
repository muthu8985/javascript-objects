"use strict"
// Create Object
const person11 = {firstName:"John", lastName:"Doe"};

// Prevent Extensions
Object.preventExtensions(person11)

// Test Error
let text = "";
try {
  person.nationality = "English";
}
catch (err) {
  text = err;
}
document.write(text)
// The Object.isExtensible() Method
// Create Object
const person12 = {firstName:"John", lastName:"Doe"};

// Prevent Extensions
Object.preventExtensions(person12);

// This will return false
let answer =  Object.isExtensible(person12)
document.write(answer);
// The Object.isSealed() method can be used to check if an object is sealed.

// The Object.isSealed() returns true if an object is sealed.
// Create Object
const person13 = {firstName:"John", lastName:"Doe"};

// Seal Object
Object.seal(person13);

// This will return true
let answer1 =  Object.isSealed(person13)
document.write(answer1);
// The Object.freeze() method prevents any changes to an object.

"use strict"
// Create Object
const person14 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// Freeze Object
Object.freeze(person14)

// Test Error
let tex1;
try {
  person14.age = 51;
  tex1 = Object.values(person14);
}
catch (err) {
  tex1= err;
}

document.write(tex1) ;

// The Object.isFrozen() Method
// Create Object
const fruit3 = ["Banana", "Orange", "Apple", "Mango"];

// Freeze Object
Object.freeze(fruit3);

// This will return true
let answer3 = Object.isFrozen(fruit3);
document.getElementById("demo7").innerHTML = answer3;