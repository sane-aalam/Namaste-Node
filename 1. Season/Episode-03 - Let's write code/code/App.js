let courseName = "Namaste Node.js - Episode 3";
let Teacher = "Akshay Saini";
let price = 5499;
let discount = 1232;
let specialDiscount = 1100;
// enroll now 
let paymentToPay = price - discount - specialDiscount;

console.log(courseName);
console.log(Teacher);
console.log(paymentToPay);

// console.log(window) - ReferenceError: window is not defined

// There are many name of global object, we have to represent single way - globalThis - JavaScript
//     globalThis == window (front-end level)
//     globalThis == this
//     globalThis == global (back-end levevl)
// support all browsers(v8,sufrie,spidermonkey) engine.

console.log(global); //  Object [global]
console.log(global == this); // false
console.log(globalThis == global) // true
console.log(globalThis) // Object [global]

