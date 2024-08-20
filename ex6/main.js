let readlineSync = require("readline-sync");

console.log("Pick a number:");
let n = readlineSync.question("> ");

while (isNaN(n)) {
    console.log(n + " is not a number, try again:");
    n = readlineSync.question("> ");
}

console.log("Type '+' to sum or 'x' to multiply:")
let calc = readlineSync.question("> ");

let val = 0;
let list = "";

while (calc !== "+" && calc !== "x") {
    console.log("Only pick '+' or 'x', try again:");
    calc = readlineSync.question("> ");
}

if (calc == "+") {
    for (let i = 1; i <= n; i++) {
        list += i;
        if (i < n) {
            list += " + ";
        }
        val = val + i;
    }
} 

if (calc == "x") {
    for (let i = 1; i <= n; i++) {
        list += i;
        if (i < n) {
            list += " x ";
        } if (val == 0) {
            val = val + 1;
        }
        val = val * i;
    }
}

console.log (list + " = " + val);