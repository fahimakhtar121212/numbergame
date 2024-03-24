#! /usr/bin/env node

import inquirer from "inquirer";

let randomnumber = Math.floor(Math.random() * 6 + 1);

let checkval = true;

while (checkval == true) {
    const answers = await inquirer.prompt([{
        name: "usernumber",
        type: "number",
        message: "please guess a number between 1 to 6"
    }]);
    if (answers.usernumber === randomnumber) {
        console.log("Conguratulation! you guess a right number.");
    } else {
        console.warn("Wrong number.");
    }
    const guessagain = await inquirer.prompt([{
        name: "guessagain",
        type: "confirm",
        message: "\n Are you want to guess again ?"
    }]);

    if (guessagain.guessagain === false) {
        checkval = false;
    }
}