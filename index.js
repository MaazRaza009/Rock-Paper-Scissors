#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.magentaBright("***************Welcome to Rock_Paper_Scissors Game***************"));
let myname = await inquirer.prompt([
    {
        name: "username",
        type: "input",
        message: chalk.blue("Enter your name:"),
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non-empty value.";
        },
    }
]);
let choices = ["rock", "paper", "scissors"];
let mychoice = await inquirer.prompt([
    {
        name: "choice",
        type: "list",
        message: chalk.blueBright("Choose any one:"),
        choices,
    }
]);
let computerchoice = choices[Math.floor(Math.random() * choices.length)];
console.log(chalk.magentaBright(`${chalk.green.bold(myname.username)} choice: ${chalk.underline(mychoice.choice)}`));
console.log(chalk.cyanBright(`Computer choice: ${chalk.underline(computerchoice)}`));
if (mychoice.choice === computerchoice) {
    console.log(chalk.gray(`It's a tie`));
}
else if ((mychoice.choice === "rock" && computerchoice === "scissors") ||
    (mychoice.choice === "paper" && computerchoice === "rock") ||
    (mychoice.choice === "scissors" && computerchoice === "paper")) {
    console.log(chalk.green(`You win!`));
    console.log(chalk.red(`Computer lose!`));
}
else {
    console.log(chalk.green(`Computer win!`));
    console.log(chalk.red(`You lose!`));
}
