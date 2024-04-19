#! /usr/bin/env node 

import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgCyan.greenBright
    .bold `* Hey Everyone Welcome To Madiha's Todo List *`);
let TODOS = [];
async function TODOapp() {
    do {
        const todoapp = await inquirer.prompt([
            {
                name: "question",
                type: "confirm",
                message: "Do you wanna proceed onwards?",
                default: true,
            },
            {
                name: "options",
                type: "list",
                message: "Select option to proceed functionalities:",
                choices: ["Add", "View", "Delete", "Update"],
            },
        ]);
        switch (todoapp.options) {
            case "Add":
                let addTodo = await inquirer.prompt({
                    name: "add",
                    type: "input",
                    message: "Please add item here:",
                });
                TODOS.push(addTodo.add);
                console.log(TODOS.join("\n"));
                break;
            case "View":
                console.log(chalk.bgCyan.greenBright.italic `* YOUR TO DO LIST *`);
                console.log(TODOS.join("\n"));
                console.log(chalk.bgCyan.greenBright.italic `* THANKYOU *`);
                break;
            case "Delete":
                if (TODOS.length === 0) {
                    console.log("No items to delete.");
                    break;
                }
                let deleteTodo = await inquirer.prompt({
                    name: "delete",
                    type: "list",
                    message: "delete items from list:",
                    choices: TODOS,
                });
                TODOS = TODOS.filter((val) => val !== deleteTodo.delete);
                console.log(TODOS.join("\n"));
                break;
            case "Update":
                if (TODOS.length === 0) {
                    console.log("No items to update.");
                    break;
                }
                let updateTodo = await inquirer.prompt({
                    name: "update",
                    type: "list",
                    message: "update items in the list:",
                    choices: TODOS,
                });
                let addTodo1 = await inquirer.prompt({
                    name: "add",
                    type: "input",
                    message: "Please add updated item here:",
                });
                TODOS = TODOS.map((val, index) => (val === updateTodo.update ? TODOS[index] = addTodo1.add : val));
                console.log(TODOS.join("\n"));
                break;
            default:
                break;
        }
    } while (true);
}
TODOapp();
