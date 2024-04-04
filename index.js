#! /usr/bin/env node
import inquirer from "inquirer";
let conversion = {
    "PKR": {
        USD: 0.0036,
        GBP: 0.0028,
        Euro: 0.0033,
        Yen: 0.55,
        IndianRupee: 0.30,
        PKR: 1,
    },
    "USD": {
        PKR: 277.90,
        GBP: 0.79,
        Euro: 0.92,
        Yen: 151.67,
        IndianRupee: 83.35,
        USD: 1,
    },
    "GBP": {
        USD: 1.27,
        GBP: 1,
        Euro: 1.17,
        Yen: 191.96,
        IndianRupee: 105.51,
        PKR: 351.75,
    },
    "Euro": {
        USD: 1.09,
        GBP: 0.86,
        Euro: 1,
        Yen: 164.59,
        IndianRupee: 90.47,
        PKR: 301.66,
    },
    "Yen": {
        USD: 0.0066,
        GBP: 0.0052,
        Euro: 0.0061,
        Yen: 1,
        IndianRupee: 0.55,
        PKR: 1.83,
    },
    "IndianRupee": {
        USD: 0.012,
        GBP: 0.0095,
        Euro: 0.011,
        Yen: 1.82,
        IndianRupee: 1,
        PKR: 3.33,
    },
};
const answer = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: "Select your Currency:",
        choices: ["PKR", "USD", "GBP", "Euro", "Yen", "IndianRupee"],
    },
    {
        name: "to",
        type: "list",
        message: "Select your Conversion Currency:",
        choices: ["PKR", "USD", "GBP", "Euro", "Yen", "IndianRupee"],
    },
    {
        name: "amount",
        type: "number",
        message: "Enter your Conversion Amount:",
    }
]);
const { from, to, amount } = answer;
if (from && to && amount) {
    let result = conversion[from][to] * amount;
    console.log(`Your Conversion Amount from ${from} to ${to} is ${result}`);
}
else {
    console.log("Invalid input!");
}
