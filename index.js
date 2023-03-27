// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

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
      .then((userResponse) => {
          const filename = './readME-user-data.html';

          const readMeHtmlData = `<!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Module 9 Mini Project</title>
          </head>
          <body>
              <p>${userResponse.title} </p>
          </body>
          </html>`
      

          fs.writeFile(filename, readMeHtmlData, (err) =>
              err ? console.log(err) : console.log('Success!')
          );
      });

}


// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
init();
