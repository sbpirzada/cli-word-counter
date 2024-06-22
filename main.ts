#!/usr/env code

// Installing inquirer and chalk packages
import inquirer from "inquirer";
import chalk from "chalk";

//Display a colorful Welcome Message
console.log(chalk.bold.cyanBright("\n \tShah Bano Pirzada - Word Counter\n"));
console.log("=".repeat(60));

// Prompt the user to enter a sentence
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence",
    }
]);

// Trimming the sentence and splitting it into words based on "spaces"
let words = answers.sentence.trim().split(" ");

//Analysis of user input sentence
console.log("=".repeat(60));
console.log(chalk.bold("- Sentence Words:"));
console.log(words);
console.log(chalk.bold(`\n - Word Count: ${words.length}`));