// Array Destructuring
// let arr = ["Foo", "Bam", "Bas", "Bar"];

// let [f1, f2,f3, f4, f5] = arr;

// console.log(f3);            // Bas
// console.log(f5);            // undefined

// Object Destructuring
// let draw = {
//     drawCircle : r =>  console.log(Math.PI * r * r),
//     drawText : text => console.log("Drawing " + text),
//     drawRect : (w,l) => console.log(w * l)
// }

// let {drawText : dt, drawCircle : dc} = draw;
// drawText("Sample Text");
// dc(3);

// Nested Destructuring

let user = {
  firstName: "Foo",
  lastName: "Bar",
  address: {
    city: "Bengaluru",
    street: "201, Main Road, Marathahalli",
  },
  friends: ["Baz", "Bam", "Bas"],
};

let {
  firstName: fn,
  lastName: ln,
  address: { city: ct, street: st },
  friends: [f1, f2, f3],
} = user;

console.log(fn, ct, f2)



let todos = [
  { label: "plant", status: true },
  { label: "shop", status: false },
  { label: "read", status: true },
];
