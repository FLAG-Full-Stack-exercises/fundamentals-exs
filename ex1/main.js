//Install readline-sync module

let readlineSync = require("readline-sync");

console.log("Please enter your name:");
let username = readlineSync.question("> ");

console.log("Hello " + username + ", welcome to the jungle!");