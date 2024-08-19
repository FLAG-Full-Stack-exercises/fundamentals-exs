let readlineSync = require("readline-sync");

console.log("Pick a number:");
let n = readlineSync.question("> ");

let sum = 0;
let result = "";

for (let i = 1; i <= n; i++) {
    result += i;
    if (i < n) {
        result += " + ";
    }
    sum = sum + i;
}

console.log (result + " = " + sum);