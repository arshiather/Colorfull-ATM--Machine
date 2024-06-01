#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 5000;
let myPin = 1234;
console.log(chalk.blue("\n \twelcome to code with Arshi - ATM Macine\n"));
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: chalk.yellow("Enter your pin code:"),
    }
]);
if (pinAnswer.pin === myPin) {
    console.log(chalk.green("\npin is correct, login successfully!\n"));
    //console.log(`Current Balance Account Is ${myBalance}`)
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an operation:",
            choices: ["Withdraw Ammount", "Check Balance"]
        }
    ]);
    if (operationAns.operation === "Withdraw Ammount") {
        let withdrawAns = await inquirer.prompt([
            {
                name: "withdrawMethod",
                type: "list",
                message: "select a withdraw method:",
                choices: ["FastCash", "Enter Amount"]
            }
        ]);
        if (withdrawAns.withdrawMethod === "FastCash") {
            let fastCashAns = await inquirer.prompt([
                {
                    name: "fastCash",
                    type: "list",
                    message: "select Amount:",
                    choices: [1000, 2000, 5000, 10000]
                }
            ]);
            if (fastCashAns.fastCash > myBalance) {
                console.log(chalk.red("Insufficient Balance"));
            }
            else {
                myBalance -= fastCashAns.fastCash;
                console.log(`${fastCashAns.fastCash} withdraw successfully`);
                console.log(`your remaining balance is ${myBalance}`);
            }
        }
        else if (withdrawAns.withdrawMethod === "Enter Amount") {
            let ammountAns = await inquirer.prompt([
                {
                    name: "ammount",
                    type: "number",
                    message: chalk.blue("Enter the ammount to withdraw"),
                }
            ]);
            if (ammountAns.ammount > myBalance) {
                console.log("insufficient Balance");
            }
            else {
                myBalance -= ammountAns.ammount;
                console.log(chalk.greenBright(`${ammountAns.ammount} Withdraw Succesfully`));
                console.log(chalk.yellow(`your Remaining Balance is: ${myBalance}`));
            }
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`your Account Balance is: ${myBalance}`);
    }
}
else {
    console.log(chalk.red("pin is incorrect,try again!"));
}
