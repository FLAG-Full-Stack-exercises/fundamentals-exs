let readlineSync = require("readline-sync");

console.log("Pick a number:");
let n = readlineSync.question("> ");

let sum = 0;
let list = "";

for (let i = 1; i <= n; i++) {
    list += i;
    if (i < n) {
        list += " + ";
    }
    sum = sum + i;
}

console.log (list + " = " + sum);