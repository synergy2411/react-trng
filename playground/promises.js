// Producer Code
// var promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (true) {
//       resolve("Here the data comes...");
//     } else {
//       reject(new Error("Something bad happened..."));
//     }
//   }, 3000);
// });

// // Consumer Code
// promise.then(
//   (response) => console.log("SUCCESS RESPONSE : ", response),
//   (err) => console.log("FAILURE RESPONSE : ", err)
// );

function delay(ms) {
  return new Promise((resolve, reject) => {
    if (ms > 2000) {
      setTimeout(() => {
        resolve();
      }, ms);
    } else {
      return reject(new Error("less time"));
    }
  });
}

// delay(3000).then(
//     () => console.log('runs after 3 seconds'),
//     err => console.log(err));
delay(1000).then(
  () => console.log("runs after 3 seconds"),
  (err) => console.log(err)
);
