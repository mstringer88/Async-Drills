//Async Now and Later
// let ranNum = 30;
// function someFunc() {  
//     console.log(ranNum);
// };
// someFunc();

// function anotherFunc() {
//     let ranNum2 = (ranNum * 4);
//     console.log(ranNum2)
// };
// anotherFunc();

// setTimeout (function () {
//     console.log(anotherFunc());
// }, 2000);

//Callbacks
// function getWords() {
//     console.log("Word 1");
//     setTimeout(function () {
//         console.log("Word 2");
//         setTimeout(function () {
//             console.log("Word 3");
//             setTimeout(function () {
//                 console.log("Word 4");
//             }, 1000);
//         }, 2000)
//     }, 3000);
// };
// getWords();

// function countDown(num, callback) {
//     setTimeout(function () {

//     }, num);


// };
// function done(message) {
//         console.log("This is the end!")
//     };
// countDown(3000, );              

//Promises
// let chickenSandwichesAreAwesome = true;
// let chickenSandwichesAreAwesome = false;
// let orderChickenSandwich = new Promise((resolve, reject) => {
//     if (chickenSandwichesAreAwesome === true) {
//         let parts = {
//             sandwich: "chicken",
//             veggies: "lettuce",
//         }
//         resolve(parts); 
//         return console.log(parts);
//     } else {
//         let wrong = new Error("No sammich for you!!!!");
//         reject(wrong);
//     }

//     function orderFood() {
//         orderChickenSandwich.then(() => {
//             resolve(console.log("Got it"));
//         }).catch(() => {
//             reject(console.log("Something happened"));
//         });
//     };
//     orderFood();
// });

//Chaining Promises

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 1000);
});

promise
.then((result,) => {
    console.log(result);
    return (result * 2);
})
.then((result) => {
    console.log(result);
    return (result * 4);
})
.then((result) => {
    console.log(result);
    return (result * 6)
})
.then((result) => {
    console.log(result);
})