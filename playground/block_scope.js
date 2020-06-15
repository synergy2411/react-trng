// function display(arr){
//     // var flash = undefined;       // JS engine
//     if(arr.length > 2){
//         let load = "LOADING";
//         console.log(flash);         // ?
//     }else{
//         let flash = "FLASHING";
//     }
// }

// display([2,3,4]);



// Primitive - number, string, date, 
// Reference - object, array, func

const load = "LOADING";
const FLASH = "FLASHING";

const user = {
    name : "Foo"
}

user = {name : "Bam"};

user.name = "Bar";

console.log(user.name);         // Bar

// const != immutable