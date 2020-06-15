// // JavaScript can be run in two environments :
// // 1. Browser Environment
// // 2. Node Runtime Environment

// // Node installation : https://nodejs.org -
// // 1. Node Runtime Environment
// // 2. Native/Core modules
// // 3. Node Package Manager - NPM

// // console.log("Hello Node!");

// // node ./arrow_func.js

// var numbers = [1,2,3,4,5];
// // ES5 Code (Vanilla JS)
// var doubleValue = numbers.map(function(value){
//     return value * 2;
// })

// console.log(doubleValue);

// //  ES6 - Arrow function
// // Without Curly braces
// var tripleValue = numbers.map((value) => value * 3);

// // With Curly braces
// var newArray = numbers.map(value => {
//     // code to write
//     return value * 4;
// })
// console.log(tripleValue);
// console.log(newArray);














// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "Do you agree?",
//   function () {
//     alert("You agreed.");
//   },
//   function () {
//     alert("You cancelled the execution.");
//   }
// );

var ask = (question, yes, no) => {
    if(confirm(question)) yes();
    else no();
}

ask("Do you agree?", 
    () => alert("You agreed"), 
    () => alert("You cancelled the execution.")
    )

