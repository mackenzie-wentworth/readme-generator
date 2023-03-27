// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project? (Required)',
        name: 'projectTitle',
      },
      {
        type: 'input',
        message: 'Please write a brief description of your project. (Required)',
        name: 'description',
      },
      {
        type: 'input',
        message: 'Please list a Table of Contents. (Optional) If you would like to skip, press the ENTER key to move on to the next prompt.',
        name: 'table-of-contents',
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
        message: 'Please enter your instructions for testing',
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
        message: 'Please enter your GitHub username',
        name: 'questions',
      },
      {
        type: 'input',
        message: 'Please enter the URL for your project respository in GitHub. (Required)',
        name: 'questions',
      },
      {
        type: 'input',
        message: 'Please enter your email address. (Required)',
        name: 'questions',
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

function init() {
  inquirer.prompt(questions)
      .then((data) => {
        const filename = './dist/README.md';
        var readMeData = generateMarkdown(data);

        fs.writeFile(filename, readMeData, (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });

}


// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
init();
