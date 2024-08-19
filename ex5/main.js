let readlineSync = require("readline-sync");

console.log("Pick a number:");
let n = readlineSync.question("> ");

let sum = 0;
let list = "";

for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        list += i;
        if (i < n - 2) {
            list += " + ";
        }
        sum = sum + i;
    }
}

console.log (list + " = " + sum);