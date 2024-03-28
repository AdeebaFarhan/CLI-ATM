#!/usr/bin/env node
import inquirer from "inquirer";

let myBalance = 100000;
let myPinCode = 250624;
console.log("Welcome to ATM", "How can we help you");

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "enter your pin",
    type: "number",
  },
]);
if (pinAnswer.pin === myPinCode) {
  console.log("Correct pin code!!!");
} else {
  console.log("Incorrect PIN. Please try again.");
}

let operationAns = await inquirer.prompt([
  {
    name: "operation",
    message: "please select one operation ",
    type: "list",
    choices: ["withdraw", "checkbalances", "fastCash"],
  },
]);
console.log(operationAns);

if (operationAns.operation === "withdraw") {
  let amountAns = await inquirer.prompt([
    {
      name: "amount",
      message: "enter your amount",
      type: "number",
    },
  ]);

  if (amountAns.amount > myBalance) {
    console.log("Insfficient balance");
  } else {
    myBalance -= amountAns.amount;
      console.log(
        `Withdrawal of ${amountAns.amount} successful. Remaining balance: ${myBalance}`
      
    );
  }
} else if (operationAns.operation === "checkbalances") {
  console.log(`Your current balance is: ${myBalance}`);
} else if (operationAns.operation === "fastCash") {
  let amount = 2000;
  console.log(`Withdrawing $${amount} for Fast Cash...`);
  if (amount > myBalance) {
    console.log("Insuffiecient balance");
  } else {
    myBalance -= amount;
    console.log(
      `Fast Cash withdrawal successful. Remaining balance: $${myBalance}`
    );
  }
} else {
  console.log("Invalid operation selected.");
}
