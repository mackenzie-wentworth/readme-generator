// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
      },
      // {
      //   type: 'input',
      //   message: 'What would you like to include in the Description section for your project?',
      //   name: 'description',
      // },
      // {
      //   type: 'input',
      //   message: 'What would you like to include in the Table of Contents section?',
      //   name: 'table-of-contents',
      // },
      // {
      //   type: 'input',
      //   message: 'What are the Installation Instructions for your project?',
      //   name: 'installation-instructions',
      // },
      // {
      //   type: 'input',
      //   message: 'What would you like to include in the Usage Information section for your project?',
      //   name: 'usage-information',
      // },
      // {
      //   type: 'input',
      //   message: 'What would you like to include in the Contribution Guidelines section for your project?',
      //   name: 'contribution-guidelines',
      // },
      // {
      //   type: 'input',
      //   message: 'What would you like to include in the Test Instructions section for your project?',
      //   name: 'test-instructions',
      // },
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
