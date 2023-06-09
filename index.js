// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
// User answers to the prompts will generate data for each section of the README
const questions = [
    {
        type: 'input',
        message: 'Welcome to README Generator! To begin, what is the title of your project? (Required)',
        name: 'projectTitle',
      },
      {
        type: 'input',
        message: 'Please enter a brief description of your project. (Required)',
        name: 'description',
      },
      {
        type: 'input',
        message: 'Please describe the installation instructions to install your project. (Required)',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'Please describe the usage of your project. What are the instructions to use the program? (Required)',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'Please enter the contribution guidelines. Who are the contributors for this project? (Required)',
        name: 'contributing',
      },
      {
        type: 'input',
        message: 'Please enter your instructions for testing. (Required)',
        name: 'tests',
      },
      {
        type: "list",
        message: "Please choose the appropriate license for your project: ",
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
        ],
        name: "license",
    },
      {
        type: 'input',
        message: 'Please enter your GitHub username. (Required)',
        name: 'username',
      },
      {
        type: 'input',
        message: 'Please enter the URL to your GitHub profile. (Required)',
        name: 'github',
      },
      {
        type: 'input',
        message: 'Please enter your email address. (Required)',
        name: 'email',
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
}

// TODO: Create a function to initialize app
// generate a README.md under "dist" folder
function init() {
  inquirer.prompt(questions)
      .then((data) => {
        const filename = './dist/README.md';
        var readMeData = generateMarkdown(data);

        fs.writeFile(filename, readMeData, (err) =>
            err ? console.log(err) : console.log('Success! Please see the "dist" folder for the README.md you just created.')
        );
    });

}

// Function call to initialize app
init();
