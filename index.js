// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Provide a description of your project:"
    },
    {
        type: "input",
        name: "installation",
        message: "How to install your project:"
    },
    {
        type: "input",
        name: "usage",
        message: "How do you use this project?"
    },
    {
        type: "checkbox",
        name: "license",
        message: "Choose a license for your project:",
        choices: ["Apache", "MIT", "Mozilla-Public", "none"]
    },
    {
        type: "input",
        name: "contribution",
        message: "How can others contribute to your project?"
    },
    {
        type: "input",
        name: "testing",
        message: "How do you test this project?"
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
