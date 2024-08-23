let readlineSync = require("readline-sync");

console.log("                         |\r\n                     \\       \/\r\n                       .-\"-.\r\n                  --  \/     \\  --\r\n `~~^~^~^~^~^~^~^~^~^-=======-~^~^~^~~^~^~^~^~^~^~^~`\r\n `~^_~^~^~-~^_~^~^_~-=========- -~^~^~^-~^~^_~^~^~^~`\r\n `~^~-~~^~^~-^~^_~^~~ -=====- ~^~^~-~^~_~^~^~~^~-~^~`\r\n `~^~^~-~^~~^~-~^~~-~^~^~-~^~~^-~^~^~^-~^~^~^~^~~^~-`\r\n `~^~^~-~^~~[ WELCOME TO BEACHWALK HOTEL ]~~^~^~~^~-`");

console.log("");

console.log("Which type of room do you prefer?");
console.log("- Select '1' for Normal Room (90€)");
console.log("- Select '2' for Deluxe Room (120€)");
console.log("- Select '3' for Normal Suite (150€)");
let type = readlineSync.question("> ");
let value1 = 0;
while (type !== '1' && type !== '2' && type !== '3') {
    console.log(type + " is not valid, select '1', '2' or '3':");
    type = readlineSync.question("> ");
}

console.log("");

console.log("How many nights would you like to stay?");
console.log("~~ Special Discounts ~~");
console.log("- 5 nights or more - 10% off");
console.log("- 10 nights or more - 15% off");
console.log("- 15 nights or more - 20% off");
console.log("Input a number:");
let days = readlineSync.question("> ");
let value2 = 0;
while (isNaN(days)) {
    console.log(days + " is not a number, try again:");
    days = readlineSync.question("> ");
}

console.log ("");

console.log("Would you like to add breakfast for an extra 10€?");
console.log("Answer Yes (y) or No (n):");
let bfast = readlineSync.question("> ");
let value3 = 0;
while (bfast !== 'y' && bfast !== 'n') {
    console.log(bfast + " is not valid, answer Yes (y) or No (n):");
    bfast = readlineSync.question("> ");
}

console.log("");

console.log("How many guests will stay in the room? (+10€ per extra guest)");
console.log("Select '1' or '2'");
let guest = readlineSync.question("> ");
let total = 0;
while (guest !== '1' && guest !== '2') {
    console.log(guest + " is not valid, select '1' or '2':");
    guest = readlineSync.question("> ");
}

if (type == '1') {
    value1 = 90;
} if (type == '2') {
    value1 = 120;
} if (type == '3') {
    value1 = 150;
    } if (days < 5) {
        value2 = value1 * days;
    } if (days >= 5 && days < 10) {
        value2 = value1 * days * 0.9;
    } if (days >= 10 && days < 15) {
        value2 = value1 * days * 0.85;
    } if (days >= 15) {
        value2 = value1 * days * 0.8;
        } if (bfast == 'y') {
            value3 = value2 + 10;
        } if (bfast == 'n') {
            value3 = value2;
            } if (guest == '1') {
                total = value3;
            } if (guest == '2') {
                total = value3 + 10 * days;
            }

console.log("");

console.log("Your grand total will be " + total + "€");
console.log("Would you like to proceed to checkout? Yes (y) or No (n):");
let checkout = readlineSync.question("> ");
while (checkout !== 'y' && checkout !== 'n') {
    console.log(checkout + " is not valid, answer Yes (y) or No (n):");
    checkout = readlineSync.question("> ");
}
if (checkout == "y") {
    console.log("");
    console.log("Payment successful, enjoy your stay! :)")
    console.log("");;
} 
if (checkout == "n") {
    console.log("");
    console.log("Payment unsuccessful, cancelling booking...")
    console.log("");;
}