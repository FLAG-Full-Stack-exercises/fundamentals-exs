// Install readline-sync module

let readlineSync = require("readline-sync");

console.log("Enter a value in dollars:");
let value = readlineSync.question("> $");

let conversion = (Math.round((value * 0.92) * 100) / 100).toFixed(2);
// €0.92 is the current equivalent of $1 (15/7/2024)

console.log("Converting...");
console.log("$" + value + " equals to €" + conversion);