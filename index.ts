#!/usr/bin/env node 

import inquirer from "inquirer";
const currency: any ={
    USD: 1, // Base Currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
}


let user_input = await inquirer.prompt(
    [
     {
       name: "from",
       message: "From Currency: ",
       type: "list",
       choices: ["USD","EUR","GBP","INR","PKR"],
     },
     {
        name: "to",
        message: "To Currency:",
        type: "list",
        choices: ["USD","EUR","GBP","INR","PKR"],
     },
     {
        name: "amount",
        message: "Enter your Amount",
        type: "number",
     }
    ]
)
let fromAmount = currency [user_input.from];
let toAmount = currency [user_input.to];
let amount = user_input.amount;
let baseAmount = amount/ fromAmount; // USD base amount
let convertedAmount = baseAmount * toAmount;
 console.log(Math.floor(convertedAmount));                